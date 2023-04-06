import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
  imports: [DynamooseModule.forRoot(), ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
