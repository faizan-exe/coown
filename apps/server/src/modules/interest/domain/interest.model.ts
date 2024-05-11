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

import { User } from '../../../modules/user/domain'

import { Asset } from '../../../modules/asset/domain'

@Entity()
export class Interest {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  status?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.interests)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  assetId: string

  @ManyToOne(() => Asset, parent => parent.interests)
  @JoinColumn({ name: 'assetId' })
  asset?: Asset

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
