'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const cities = [
      { en: 'Cairo', ar: 'القاهرة' },
      { en: 'Alexandria', ar: 'الإسكندرية' },
      { en: 'Giza', ar: 'الجيزة' },
      { en: 'Sharm El Sheikh', ar: 'شرم الشيخ' },
      { en: 'Luxor', ar: 'الأقصر' },
      { en: 'Aswan', ar: 'أسوان' },
      { en: 'Mansoura', ar: 'المنصورة' },
      { en: 'Tanta', ar: 'طنطا' },
      { en: 'Suez', ar: 'السويس' },
      { en: 'Port Said', ar: 'بورسعيد' },
      { en: 'Damanhur', ar: 'دمنهور' },
      { en: 'Minya', ar: 'المنيا' },
      { en: 'Zagazig', ar: 'الزقازيق' },
      { en: 'Ismailia', ar: 'الإسماعيلية' },
      { en: 'Beni Suef', ar: 'بني سويف' },
      { en: 'Kafr El Sheikh', ar: 'كفر الشيخ' },
      { en: 'Sohag', ar: 'سوهاج' },
      { en: 'Qena', ar: 'قنا' },
      { en: 'Damietta', ar: 'دمياط' },
      { en: 'Helwan', ar: 'حلوان' },
      { en: 'Beni Mazar', ar: 'بني مزار' },
      { en: 'Abu Qir', ar: 'أبو قير' },
      { en: 'Arish', ar: 'العريش' },
      { en: 'El Mahalla El Kubra', ar: 'المحلة الكبرى' },
      { en: 'Shibin El Kom', ar: 'شبين الكوم' },
      { en: 'Menouf', ar: 'منوف' },
      { en: 'Assiut', ar: 'أسيوط' },
      { en: 'El-Fayoum', ar: 'الفيوم' },
      { en: 'New Cairo', ar: 'القاهرة الجديدة' },
      { en: '6th of October City', ar: 'مدينة 6 أكتوبر' },
      { en: 'Nasr City', ar: 'مدينة نصر' },
      { en: 'Maadi', ar: 'المعادي' },
      { en: 'October 6 City', ar: 'مدينة 6 أكتوبر' },
      { en: 'Sheikh Zayed City', ar: 'مدينة الشيخ زايد' },
      { en: 'New Alexandria', ar: 'الإسكندرية الجديدة' },
      { en: 'New Mansoura', ar: 'المنصورة الجديدة' },
      { en: 'New Damietta', ar: 'دمياط الجديدة' },
      { en: 'New Ismailia', ar: 'الإسماعيلية الجديدة' },
    ];
    await queryInterface.bulkInsert('translatedNames', cities, {returning: true});
    let insertedRows = await queryInterface.sequelize.query(
      `SELECT * FROM translatedNames ORDER BY id ASC LIMIT 1000 OFFSET 25`
    )
    console.log(insertedRows[0])
    let insertedCities = insertedRows[0].map((name)=>({nameId: name.id}))
    await queryInterface.bulkInsert('cities', insertedCities, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('translatedNames', null,{});
  }
};
