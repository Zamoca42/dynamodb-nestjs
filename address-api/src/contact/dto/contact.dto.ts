import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateContactDto {
  @IsPhoneNumber()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  name: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}

export class UpdateContactDto extends PartialType(CreateContactDto) {}
