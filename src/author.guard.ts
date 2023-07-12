import { Injectable, CanActivate, ExecutionContext } from '@fastwa/common';

@Injectable()
export class AuthorGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const msg = ctx.switchToAdapter().getMessage();
    return msg.key.fromMe;
  }
}
