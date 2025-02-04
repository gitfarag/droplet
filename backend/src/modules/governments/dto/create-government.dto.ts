import { Exclude, Transform } from "class-transformer";
import { Governments } from "src/database/models/governments";
import { TranslatedNames } from "src/database/models/translatedNames";
import { CreateTranslatedNameDto } from "src/modules/translated-names/dto/create-translated-name.dto";

export class CreateGovernmentDto {
    // @Exclude()
    id?: number

    @Exclude()
    nameId: number

    @Transform(({value}) => {return new CreateTranslatedNameDto(value.dataValues)})
    name: TranslatedNames

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    constructor(partial: Partial<Governments>){
        Object.assign(this, partial)
    }
}
