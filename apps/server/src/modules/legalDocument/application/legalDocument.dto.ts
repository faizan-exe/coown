import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class LegalDocumentCreateDto {
  @IsString()
  @IsOptional()
  documentType?: string

  @IsString()
  @IsOptional()
  contentUrl?: string

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

export class LegalDocumentUpdateDto {
  @IsString()
  @IsOptional()
  documentType?: string

  @IsString()
  @IsOptional()
  contentUrl?: string

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
