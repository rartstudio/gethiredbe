import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './activity.entity';
import { Repository } from 'typeorm';

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

  async create() {
    const entity: Activity = new Activity();
    return this.repository.create(entity);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
