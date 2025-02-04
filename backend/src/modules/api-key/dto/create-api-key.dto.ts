import { Exclude } from "class-transformer";
import { ApiKey } from "src/database/models/apiKey.model";

export class CreateApiKeyDto {
    key: string;

    @Exclude()
    token: string;

    isActive: boolean;

    @Exclude()
    createdAt: Date

    @Exclude()
    updatedAt: Date

    constructor(partial: Partial<ApiKey>){
        Object.assign(this, partial)
    }
}
