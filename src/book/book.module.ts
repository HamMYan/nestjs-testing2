import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { JoiPipeModule } from 'nestjs-joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports:[
    JoiPipeModule,
    TypeOrmModule.forFeature([Book,User])
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
