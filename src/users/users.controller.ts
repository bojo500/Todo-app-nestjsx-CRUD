import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from "./entity/users.entity";
import { Crud, CrudController } from "@nestjsx/crud";



@Crud({
  model: {
    type: Users,
  },
})
@Controller('users')
export class UsersController implements CrudController<Users>{
  constructor(public readonly service: UsersService) {}

}
