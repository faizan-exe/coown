import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class OwnershipCreateDto {
  @IsNumber()
  @IsOptional()
  sharePercentage?: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  assetId?: string

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

export class OwnershipUpdateDto {
  @IsNumber()
  @IsOptional()
  sharePercentage?: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  assetId?: string

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
