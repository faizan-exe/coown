import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class AssetValueHistoryCreateDto {
  @IsString()
  @IsOptional()
  recordedDate?: string

  @IsNumber()
  @IsOptional()
  value?: number

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

export class AssetValueHistoryUpdateDto {
  @IsString()
  @IsOptional()
  recordedDate?: string

  @IsNumber()
  @IsOptional()
  value?: number

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
