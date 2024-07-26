import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';

describe('BookService', () => {
  let service: BookService;
  let repository: Repository<Book>;
  let userrepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<BookService>(BookService);
    userrepository = module.get<Repository<User>>(getRepositoryToken(User));
    repository = module.get<Repository<Book>>(getRepositoryToken(Book));
  });

  describe('create book =>', () => {
    it('should create new Book', async () => {
      const user: any = {};
      const book: any = {};
      jest.spyOn(userrepository, 'findOneBy').mockImplementation(() => user);
      if(user){
        jest.spyOn(repository, 'save').mockImplementation(()=>book);
        const result =await service.create(user)
        expect(result).toEqual(user);
      }else{
        expect(await service.create(user)).toEqual({ message: 'User not found' });
      }
    });
  });

  
});
