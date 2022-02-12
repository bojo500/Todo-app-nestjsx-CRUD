import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";


const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Todo {
  @PrimaryGeneratedColumn() id: number;
  @CreateDateColumn() createdDate: Date;
  @UpdateDateColumn() updatedDate: Date;
  @DeleteDateColumn() deletedDate: Date;

  @IsNotEmpty({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true, default: null })
  description: string;
}
