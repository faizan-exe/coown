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

import { Transaction } from '../../../modules/transaction/domain'

@Entity()
export class Ownership {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  sharePercentage?: number

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.ownerships)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  assetId: string

  @ManyToOne(() => Asset, parent => parent.ownerships)
  @JoinColumn({ name: 'assetId' })
  asset?: Asset

  @OneToMany(() => Transaction, child => child.ownership)
  transactions?: Transaction[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
