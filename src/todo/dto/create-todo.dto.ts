import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty({ message: `title todo must be filled` })
  @ApiProperty()
  public title: string;

  @IsString()
  @IsNotEmpty({ message: `priority todo must be filled` })
  @ApiProperty()
  public priority: string;

  @IsNumber()
  @IsNotEmpty({ message: `activity group must be filled` })
  @ApiProperty()
  public activityGroupId: number;
}
