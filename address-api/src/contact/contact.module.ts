import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { DynamooseModule } from 'nestjs-dynamoose';
import { ContactSchema } from './contact.schema';

@Module({
  imports: [
    DynamooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
