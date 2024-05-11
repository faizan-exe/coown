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
export class LegalDocument {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  documentType?: string

  @Column({ nullable: true })
  contentUrl?: string

  @Column({})
  assetId: string

  @ManyToOne(() => Asset, parent => parent.legalDocuments)
  @JoinColumn({ name: 'assetId' })
  asset?: Asset

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
