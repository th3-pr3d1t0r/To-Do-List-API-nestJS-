import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
   private todos: Todo[] = []; // Our in-memory "database"
  private nextId = 1; // Simple ID generator

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      description: createTodoDto.description,
      completed: createTodoDto.completed || false, // Default to false if not provided
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  findAll ():Todo[]{
    return this.todos;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} todo`;
  // }

  // update(id: number, updateTodoDto: UpdateTodoDto) {
  //   return `This action updates a #${id} todo`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} todo`;
  // }
}
