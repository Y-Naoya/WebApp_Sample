import { ApiProperty } from '@nestjs/swagger';

export class SampleDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
