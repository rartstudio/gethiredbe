import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './activity.entity';
import { Repository } from 'typeorm';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private repository: Repository<Activity>,
  ) {}

  async findAll(): Promise<Activity[]> {
    return await this.repository.find();
  }

  async findOne(activity_id: number): Promise<Activity | null> {
    return await this.repository.findOneBy({ activity_id });
  }

  async updateOne(activity_id: number, updateActivityDto: UpdateActivityDto) {
    return await this.repository.update(activity_id, updateActivityDto);
  }

  async create(createActivityDto: CreateActivityDto) {
    try {
      const entity: Activity = new Activity();
      entity.title = createActivityDto.title;
      entity.email = createActivityDto.email;
      console.log(entity);
      return await this.repository.save(entity);
    } catch (err) {
      console.log(err);
    }
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
