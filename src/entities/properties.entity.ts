import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Address } from "./addres.entity";
import { Categories } from "./categories.entity";
import { SchedulesUserProperties } from "./schedules_user_properties.entity";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false ,nullable:true})
  sold: boolean;

  @Column({type:'decimal', precision: 12, scale: 2})
  value: number;

  @Column({type:'integer'})
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @Column({ type: "date" })
  updatedAt: Date;

  @OneToMany( () => SchedulesUserProperties,(schedulesUserProperties) => schedulesUserProperties.property)
  schedules: SchedulesUserProperties[];

  @ManyToOne(() => Categories,(categories) => categories.properties)
  category: Categories;

  @OneToOne(() => Address,{nullable:false})
  @JoinColumn()
  address: Address;
}

export { Properties };
