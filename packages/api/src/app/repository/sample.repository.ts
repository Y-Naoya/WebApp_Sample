import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sample } from '../entity/sample.entity';

@Injectable()
export class SampleRepository {
  constructor(
    @InjectRepository(Sample)
    private sampleRepository: Repository<Sample>,
  ) {}

  findAll(): Promise<Sample[]> {
    return this.sampleRepository.find();
  }
}
