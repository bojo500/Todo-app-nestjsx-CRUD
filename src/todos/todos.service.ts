import { Injectable } from '@nestjs/common';
import { Todo } from "./entities/todo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class TodosService extends TypeOrmCrudService<Todo> {
  constructor(@InjectRepository(Todo) repo) {
    super(repo);
  }
}
