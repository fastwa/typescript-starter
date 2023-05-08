import { Injectable } from '@fastwa/common';

@Injectable()
export class AppService {
  getPing(): string {
    return 'Pong!';
  }
}
