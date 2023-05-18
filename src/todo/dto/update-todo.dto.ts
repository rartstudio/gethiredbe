import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsNotEmpty({ message: `title must be filled` })
  @ApiProperty()
  public title: string;

  @IsString()
  @IsNotEmpty({ message: `priority todo must be filled` })
  public priority: string;
}
