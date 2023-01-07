import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { SchedulesUserProperties } from "./schedules_user_properties.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
 
  @Column({  unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @Column({ default:true })
  isActive: boolean;
 
  @CreateDateColumn({type:"date"})
  createdAt: Date;

  @UpdateDateColumn({type:"date"})
  updatedAt: Date;

  @OneToMany(() => SchedulesUserProperties, schedulesUserProperties => schedulesUserProperties.user)
  schedules: SchedulesUserProperties[]

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
export { User };
