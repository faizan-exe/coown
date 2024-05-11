import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Group } from '../../../modules/group/domain'

import { User } from '../../../modules/user/domain'

@Entity()
export class GroupMembership {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  role?: string

  @Column({})
  groupId: string

  @ManyToOne(() => Group, parent => parent.groupMemberships)
  @JoinColumn({ name: 'groupId' })
  group?: Group

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.groupMemberships)
  @JoinColumn({ name: 'userId' })
  user?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
