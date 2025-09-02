/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { ListScenarioRepository } from './repository/listall-scenario.repository';
import { FindOneScenarioRepository } from './repository/findone-scenario.repository';

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase, private readonly listScenarioRepository: ListScenarioRepository, private readonly findoneScenarioRepository: FindOneScenarioRepository) { }
  
  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioRepository.list();
  }

  findOne(id: number) {
    return this.findoneScenarioRepository.findone(id.toString());
  }

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
