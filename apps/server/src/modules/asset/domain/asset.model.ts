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

import { Interest } from '../../../modules/interest/domain'

import { Ownership } from '../../../modules/ownership/domain'

import { Group } from '../../../modules/group/domain'

import { LegalDocument } from '../../../modules/legalDocument/domain'

import { AssetValueHistory } from '../../../modules/assetValueHistory/domain'

@Entity()
export class Asset {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({ nullable: true })
  description?: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  totalValue?: number

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  availableQuota?: number

  @OneToMany(() => Interest, child => child.asset)
  interests?: Interest[]

  @OneToMany(() => Ownership, child => child.asset)
  ownerships?: Ownership[]

  @OneToMany(() => Group, child => child.asset)
  groups?: Group[]

  @OneToMany(() => LegalDocument, child => child.asset)
  legalDocuments?: LegalDocument[]

  @OneToMany(() => AssetValueHistory, child => child.asset)
  assetValueHistorys?: AssetValueHistory[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
