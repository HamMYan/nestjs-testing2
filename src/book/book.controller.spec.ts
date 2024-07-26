import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';

describe('BookController', () => {
  let controller: BookController;
  let bookService: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService,
        {
          provide: getRepositoryToken(Book),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<BookController>(BookController);
    bookService = module.get<BookService>(BookService);

  });

  
  describe('create book =>', () => {
    it('should create new Book', async () => {
      const book: any = {
        name: 'Anna',
        price: 3,
        count: 43,
        userId: 1
      };
      jest.spyOn(bookService, 'create').mockImplementation(() => book);
      const result = await controller.create(book);
      expect(result).toEqual(book);
    });
  });

  describe('get books =>', () => {
    it('should get all Book', async () => {
      const books: any = [];
      jest.spyOn(bookService, 'findAll').mockImplementation(() => books);
      const result = await controller.findAll();
      expect(result).toEqual(books);
    });
  });

  describe('get book by id =>', () => {
    it('should get by id Book', async () => {
      const book: any = {};
      jest.spyOn(bookService, 'findOne').mockImplementation(() => book);
      const result = await controller.findOne('1');
      expect(result).toEqual(book);
    });
  });

  describe('update book =>', () => {
    it('should update Book', async () => {
      const book: any = {};
      jest.spyOn(bookService, 'update').mockImplementation(() => book);
      const result = await controller.update('1', book);
      expect(result).toEqual(book);
    });

    describe('delete user =>', () => {
      it('should delete User', async () => {
        const book: any = true;
        jest.spyOn(bookService, 'remove').mockImplementation(() => book);
        const result = await controller.remove('909');
        if (result) {
          expect(result).toEqual(book);
        } else {
          expect(result).toEqual(!book);
        }
      });
    });
  });
});
