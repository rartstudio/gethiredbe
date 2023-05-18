import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty({ message: `title todo must be filled` })
  @ApiProperty()
  public title: string;

  @IsOptional()
  public email: string;
}
