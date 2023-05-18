import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './activity.entity';

@Injectable()
export class ActivityExistGuard implements CanActivate {
  constructor(private activityService: ActivityService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.params.id);
    const activity: Activity = await this.activityService.findOne(request.params.id);
    if (activity == null) {
      console.log('running');
      throw new NotFoundException({
        status: 'Not Found',
        message: `Activity with ID ${request.params.id} Not Found`,
      });
    }
    return true;
  }
}
