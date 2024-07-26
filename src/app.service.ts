import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): number {
    return 5;
  }
}
