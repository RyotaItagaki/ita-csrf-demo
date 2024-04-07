import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // return this.validateRequest(request);
    if (!this.validateRequest(request)) {
      throw new ForbiddenException(
        'アクセスが拒否されました。認証が必要です。',
      );
    }
    return true;
  }

  private validateRequest(request): boolean {
    console.log('cookie', request.cookies);
    return !!request.cookies['userId']; // CookieにuserIdが存在するかチェック
  }
}
