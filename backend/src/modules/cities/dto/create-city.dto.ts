import { Exclude, Transform } from "class-transformer";
import { IsNotEmpty, IsObject } from "class-validator";
import { Cities } from "src/database/models/cities.model";
import { TranslatedNames } from "src/database/models/translatedNames";
import { CreateTranslatedNameDto } from "src/modules/translated-names/dto/create-translated-name.dto";

export class CreateCityDto {
    // @Exclude()
    id?: number;

    @Exclude()
    nameId: number;

    @IsNotEmpty()
    @IsObject()
    @Transform(({value})=>{return new CreateTranslatedNameDto(value.dataValues)})
    name: TranslatedNames

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date
    constructor(partial: Partial<Cities>){
        Object.assign(this, partial);
    }
}
