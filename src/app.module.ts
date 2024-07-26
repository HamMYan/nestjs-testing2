import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testing',
      entities:[User,Book],
      synchronize: true
    }),
    UserModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
