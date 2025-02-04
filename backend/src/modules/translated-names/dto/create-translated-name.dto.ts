import { Exclude } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { TranslatedNames } from "src/database/models/translatedNames"

export class CreateTranslatedNameDto{
    @Exclude()
    // @IsNumber()
    id?: number

    @IsString()
    @IsNotEmpty()
    en: string

    @IsString()
    @IsNotEmpty()
    ar: string

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    constructor (partial: Partial<TranslatedNames>){
        Object.assign(this, partial)
    }
}
