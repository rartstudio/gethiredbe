import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('activity-groups')
export class ActivityController {
  @Get('/')
  async getActivities() {}

  @Get('/:id')
  async getActivity(@Param('id', ParseIntPipe) id: number) {}

  @Post('/')
  async createActivity() {}

  @Patch('/:id')
  async updateActivity(@Param('id', ParseIntPipe) id: number) {}

  @Delete('/:id')
  async deleteActivity(@Param('id', ParseIntPipe) id: number) {}
}
