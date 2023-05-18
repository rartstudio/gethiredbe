import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private repository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.repository.find();
  }

  async findByActivityGroupId(activityGroupId: number) {
    return await this.repository.findBy({
      activity_group_id: activityGroupId,
    });
  }

  async findOne(todo_id: number): Promise<Todo | null> {
    return await this.repository.findOneBy({ todo_id });
  }

  async updateOne(todo_id: number, updateTodoDto: UpdateTodoDto) {
    const todo = new Todo();
    todo.title = updateTodoDto.title;
    todo.priority = updateTodoDto.priority;
    return await this.repository.update(todo_id, todo);
  }

  async create(createTodoDto: CreateTodoDto) {
    const entity: Todo = new Todo();
    entity.title = createTodoDto.title;
    entity.priority = createTodoDto.priority;
    entity.is_active = true;
    entity.activity_group_id = createTodoDto.activityGroupId;
    return await this.repository.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
