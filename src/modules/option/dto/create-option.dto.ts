/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOptionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nome da opção exibida no cenário',
        example: 'JavaScript'
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Descrição ou explicação adicional sobre a opção',
        example: 'Uma linguagem de programação amplamente utilizada para desenvolvimento web e backend com Node.js.'
    })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'ID do cenário ao qual essa opção pertence',
        example: 'c2a4f8e1-9b73-4a55-a7a2-1df32c9a2a1f'
    })
    scenarioId: string;
    // Scores: Score[]
}
