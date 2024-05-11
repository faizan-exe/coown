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

@Entity()
export class AssetValueHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  recordedDate?: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  value?: number

  @Column({})
  assetId: string

  @ManyToOne(() => Asset, parent => parent.assetValueHistorys)
  @JoinColumn({ name: 'assetId' })
  asset?: Asset

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
