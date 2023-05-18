import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateActivityDto {
  @IsString()
  @IsNotEmpty({ message: `title todo must be filled` })
  @ApiProperty()
  public title: string;
}
