import { Injectable } from '@nestjs/common';
import { SampleRepository } from '../repository/sample.repository';
import { SampleDTO } from '../dto/sample.dto';

@Injectable()
export class AppService {
  constructor(private sampleRepository: SampleRepository) {}

  getAll(): Promise<SampleDTO[]> {
    return this.sampleRepository.findAll();
  }
}
