import { Command, Controller, UseGuards } from '@fastwa/common';

import { AppService } from './app.service';
import { AuthorGuard } from './author.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Command('/ping')
  @UseGuards(AuthorGuard)
  ping() {
    return this.appService.getPing();
  }
}
