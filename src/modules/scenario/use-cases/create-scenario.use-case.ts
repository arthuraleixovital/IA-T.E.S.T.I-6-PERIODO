/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { CreateScenarioRepository } from '../repository/create-scenario.repository';
import { CreateScenarioDto } from '../dto/create-scenario.dto';

@Injectable()
export class CreateScenarioCase {
    constructor(
        private readonly createScenarioRepository: CreateScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateScenarioDto){
        try {
            const scenario = this.createScenarioRepository.create(data);
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}