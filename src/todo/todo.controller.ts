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
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { TodoExistGuard } from './todo-exist.guard';

@Controller('todo-items')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/')
  async getTodos() {
    const todos: Todo[] = await this.todoService.findAll();

    
  }

  @Get('/:id')
  @UseGuards(TodoExistGuard)
  async getTodo(@Param('id', ParseIntPipe) id: number) {
    const todo: Todo = await this.todoService.findOne(id);

    return {
      status: 'Success',
      message: 'Success',
      data: {
        id: todo.todo_id,
        activity_group_id: todo.activity_group_id,
        title: todo.title,
        is_active: todo.is_active,
        priority: todo.priority,
        createdAt: todo.created_at,
        updatedAt: todo.updated_at,
      },
    };
  }

  @Post('/')
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    const todo: Todo = await this.todoService.create(createTodoDto);

    return {
      status: 'Success',
      message: 'Success',
      data: {
        id: todo.todo_id,
        activity_group_id: todo.activity_group_id,
        title: todo.title,
        is_active: todo.is_active,
        priority: todo.priority,
        createdAt: todo.created_at,
        updatedAt: todo.updated_at,
      },
    };
  }

  @Patch('/:id')
  @UseGuards(TodoExistGuard)
  async updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    await this.todoService.updateOne(id, updateTodoDto);

    const todo: Todo = await this.todoService.findOne(id);

    return {
      status: 'Success',
      message: 'Success',
      data: {
        id: todo.todo_id,
        activity_group_id: todo.activity_group_id,
        title: todo.title,
        is_active: todo.is_active,
        priority: todo.priority,
        createdAt: todo.created_at,
        updatedAt: todo.updated_at,
      },
    };
  }

  @Delete('/:id')
  @UseGuards(TodoExistGuard)
  async deleteTodo(@Param('id', ParseIntPipe) id: number) {
    await this.todoService.remove(id);

    return {
      status: 'Success',
      message: 'Success',
      data: [],
    }
  }
}
