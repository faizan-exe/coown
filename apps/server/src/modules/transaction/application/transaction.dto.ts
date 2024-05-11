import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TransactionCreateDto {
  @IsString()
  @IsOptional()
  transactionType?: string

  @IsString()
  @IsOptional()
  transactionDate?: string

  @IsNumber()
  @IsOptional()
  amount?: number

  @IsString()
  @IsOptional()
  ownershipId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class TransactionUpdateDto {
  @IsString()
  @IsOptional()
  transactionType?: string

  @IsString()
  @IsOptional()
  transactionDate?: string

  @IsNumber()
  @IsOptional()
  amount?: number

  @IsString()
  @IsOptional()
  ownershipId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
