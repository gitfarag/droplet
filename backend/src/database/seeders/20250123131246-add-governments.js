'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   en: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const translatedNames = [
      { ar: 'القاهرة', en: 'Cairo' },
      { ar: 'الإسكندرية', en: 'Alexandria' },
      { ar: 'الجيزة', en: 'Giza' },
      { ar: 'الأقصر', en: 'Luxor' },
      { ar: 'أسوان', en: 'Aswan' },
      { ar: 'الدقهلية', en: 'Dakahlia' },
      { ar: 'مطروح', en: 'Matrouh' },
      { ar: 'قنا', en: 'Qara' },
      { ar: 'السويس', en: 'Suez' },
      { ar: 'بور سعيد', en: 'Port Said' },
      { ar: 'الإسماعيلية', en: 'Ismailia' },
      { ar: 'بني سويف', en: 'Bari Suef' },
      { ar: 'الفيوم', en: 'Fayoum' },
      { ar: 'الشرقية', en: 'Sharqia' },
      { ar: 'كفر الشيخ', en: 'Kafr El Sheikh' },
      { ar: 'المنيا', en: 'Minya' },
      { ar: 'الغربية', en: 'Gharbia' },
      { ar: 'سوهاج', en: 'Sohag' },
      { ar: 'دمياط', en: 'Damietta' },
      { ar: 'أسيوط', en: 'Assiut' },
      { ar: 'القليوبيه', en: 'Qalyubia' },
      { ar: 'البحر الأحمر', en: 'Red Sea' },
      { ar: 'الوادي الجديد', en: 'New Valley' },
      { ar: 'جنوب سيناء', en: 'South Sinai' },
      { ar: 'شمال سيناء', en: 'North Sinai' },
    ];

    await queryInterface.bulkInsert('translatedNames', translatedNames, {
      returning: true,
    });

    let insertedRows = await queryInterface.sequelize.query(
      `SELECT * FROM translatedNames WHERE en IN (:enValues)`,
      {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          enValues: translatedNames.map(name => name.en)
        }
      }
    )

    console.log(insertedRows);
    
    const governments = insertedRows.map((name) => ({ nameId: name.id }));

    await queryInterface.bulkInsert('governments', governments, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('governments', null, {});
    // await queryInterface.bulkDelete('translatedNames', null, {});

  },
};
