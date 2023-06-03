import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('call getHello');
    return 'Hello World!';
  }
}
