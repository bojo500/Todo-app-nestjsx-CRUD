import { Controller} from '@nestjs/common';
import { TodosService } from './todos.service';
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { Todo } from "./entities/todo.entity";


@Crud({

  model: {
    type: Todo,
  },
})
@Controller('todos')
@ApiTags('Todo')
export class TodosController implements CrudController<Todo> {
  constructor(
    public service: TodosService,
    ) {
  }
}