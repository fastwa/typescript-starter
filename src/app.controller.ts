import { Command, Controller } from '@fastwa/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Command('ping')
  ping() {
    return this.appService.getPing();
  }
}
