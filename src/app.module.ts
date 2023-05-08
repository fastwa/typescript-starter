import { Module } from '@fastwa/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}