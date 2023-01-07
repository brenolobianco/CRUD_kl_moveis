import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  district: string;

  @Column({nullable:true})
  number: string;

  @Column()
  zipCode: string;

  @Column()
  city: string;

  @Column()
  state: string;
}

export { Address };
