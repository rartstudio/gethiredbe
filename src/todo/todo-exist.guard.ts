import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Injectable()
export class TodoExistGuard implements CanActivate {
  constructor(private todoService: TodoService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const todo: Todo = await this.todoService.findOne(request.params.id);
    if (todo == null) {
      throw new NotFoundException({
        status: 'Not Found',
        message: `Todo with ID ${request.params.id} Not Found`,
      });
    }
    return true;
  }
}
