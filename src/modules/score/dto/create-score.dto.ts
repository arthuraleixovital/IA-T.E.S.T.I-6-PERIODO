/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateScoreDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'ID da opção avaliada, relacionada a um cenário específico.',
        example: 'a4f7c2d1-9e34-4b7d-bf21-8c3f5a77e912'
    })
    optionId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'ID do critério utilizado para atribuir a pontuação à opção.',
        example: 'b8e2f7a9-6c12-45a9-8e99-ef23c91e5c43'
    })
    criterionId: string;
}