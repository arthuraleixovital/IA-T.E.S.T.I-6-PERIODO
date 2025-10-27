/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCriterionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nome do critério utilizado para avaliação ou pontuação.',
        example: 'Clareza da resposta'
    })
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Peso do critério na avaliação. Define sua importância relativa em relação aos outros critérios.',
        example: 0.3
    })
    weight: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Indica se o critério está ativo e pode ser utilizado nas avaliações.',
        example: true
    })
    active: boolean;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Data de criação do critério no formato ISO.',
        example: '2025-10-27T12:00:00.000Z'
    })
    createdAt: Date;

    // Scores: Score[];
}
