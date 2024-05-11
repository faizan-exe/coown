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

import { Ownership } from '../../../modules/ownership/domain'

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  transactionType?: string

  @Column({ nullable: true })
  transactionDate?: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  amount?: number

  @Column({})
  ownershipId: string

  @ManyToOne(() => Ownership, parent => parent.transactions)
  @JoinColumn({ name: 'ownershipId' })
  ownership?: Ownership

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
