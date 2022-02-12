import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<Users> {
  constructor(@InjectRepository(Users) repo) {
    super(repo);
  }
}