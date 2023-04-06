import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class ContactKey {
  @IsNumber()
  idx: number;

  @IsString()
  id: string;
}

export class ContactDto extends ContactKey {
  @IsString()
  @IsPhoneNumber()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  email: string;
}

export class UpdateContactDto extends PartialType(ContactDto) {}
