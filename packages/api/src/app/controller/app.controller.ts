import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from '../service/app.service';
import { SampleDTO } from '../dto/sample.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'select success',
    type: SampleDTO,
    isArray: true,
  })
  getAll(): Promise<SampleDTO[]> {
    return this.appService.getAll();
  }
}
