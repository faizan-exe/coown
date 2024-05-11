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

import { Asset } from '../../../modules/asset/domain'

import { GroupMembership } from '../../../modules/groupMembership/domain'

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  name?: string

  @Column({})
  assetId: string

  @ManyToOne(() => Asset, parent => parent.groups)
  @JoinColumn({ name: 'assetId' })
  asset?: Asset

  @OneToMany(() => GroupMembership, child => child.group)
  groupMemberships?: GroupMembership[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
