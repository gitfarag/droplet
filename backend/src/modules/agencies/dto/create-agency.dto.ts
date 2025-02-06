import { Type } from "class-transformer"
import { IsInstance, IsNotEmpty, IsString, ValidateNested } from "class-validator"
import { AgencyTypes } from "src/config/ENUMS/agencyTypes.enum"
import { AgencyStatus } from "src/config/ENUMS/status.enum"
import { Addresses } from "src/database/models/adresses.model"
import { TranslatedNames } from "src/database/models/translatedNames"
import { CreateAddressDto } from "src/modules/addresses/dto/create-address.dto"
import { CreateTranslatedNameDto } from "src/modules/translated-names/dto/create-translated-name.dto"

export class CreateAgencyDto {
    nameId: number
    addressId: number
    @ValidateNested()
    @Type(()=> CreateTranslatedNameDto)
    name: TranslatedNames

    @IsString()
    logo: string

    @IsString()
    phone: string

    @IsNotEmpty()
    status: AgencyStatus

    @IsNotEmpty()
    agencyType: AgencyTypes

    social: object

    @ValidateNested() // This tells class-validator to validate the nested CreateAddressDto
    @Type(() => CreateAddressDto) // Ensures that the value is treated as CreateAddressDto
    address: Addresses
}
