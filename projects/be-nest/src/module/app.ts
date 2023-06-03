import { Module } from '@nestjs/common';
import { AppController } from '../controller/app/index';
import { AppService } from '../service/app/index';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
