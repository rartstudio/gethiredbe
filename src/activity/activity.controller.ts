import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './activity.entity';
import { ActivityExistGuard } from './activity-exist.guard';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activity-groups')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get('')
  async getActivities() {
    const activities: Activity[] = await this.activityService.findAll();

    const result = activities.map((activity: Activity) => {
      return {
        id: activity.activity_id,
        title: activity.title,
        email: activity.email,
        createdAt: activity.created_at,
        updatedAt: activity.updated_at,
      };
    });

    return {
      message: 'Success',
      status: 'Success',
      data: result,
    };
  }

  @Get(':id')
  @UseGuards(ActivityExistGuard)
  async getActivity(@Param('id', ParseIntPipe) id: number) {
    const activity: Activity = await this.activityService.findOne(id);

    const result = {
      id: activity.activity_id,
      title: activity.title,
      email: activity.email,
      createdAt: activity.created_at,
      updatedAt: activity.updated_at,
    };

    return {
      message: 'Success',
      status: 'Success',
      data: result,
    };
  }

  @Post('/')
  async createActivity(@Body() createActivityDto: CreateActivityDto) {
    const activity: Activity = await this.activityService.create(
      createActivityDto,
    );

    const result = {
      id: activity.activity_id,
      title: activity.title,
      email: activity.email,
      createdAt: activity.created_at,
      updatedAt: activity.updated_at,
    };

    return {
      message: 'Success',
      status: 'Success',
      data: result,
    };
  }

  @Patch('/:id')
  @UseGuards(ActivityExistGuard)
  async updateActivity(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    await this.activityService.updateOne(id, updateActivityDto);

    const activity: Activity = await this.activityService.findOne(id);

    const result = {
      id: activity.activity_id,
      title: activity.title,
      email: activity.email,
      createdAt: activity.created_at,
      updatedAt: activity.updated_at,
    };

    return {
      message: 'Success',
      status: 'Success',
      data: result,
    };
  }

  @Delete('/:id')
  @UseGuards(ActivityExistGuard)
  async deleteActivity(@Param('id', ParseIntPipe) id: number) {
    await this.activityService.remove(id);

    return {
      status: 'Success',
      message: 'Success',
      data: [],
    };
  }
}
