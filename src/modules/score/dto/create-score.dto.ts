/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateScoreDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    optionId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    criterionId: string;
}