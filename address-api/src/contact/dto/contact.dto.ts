import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class ContactDto {
  @IsPhoneNumber()
  phoneNumber: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

export class UpdateContactDto extends PartialType(ContactDto) {}
