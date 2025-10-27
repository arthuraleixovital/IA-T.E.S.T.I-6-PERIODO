/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateScenarioDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Título do cenário que será apresentado ao usuário.',
        example: 'Escolha a melhor linguagem de programação'
    })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Descrição detalhada do cenário, explicando o contexto ou a situação a ser avaliada.',
        example: 'Você precisa escolher uma linguagem de programação para desenvolver uma aplicação web moderna.'
    })
    description: string;

    // options: Option[];
}
