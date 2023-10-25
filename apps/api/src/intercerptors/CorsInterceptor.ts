import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();
    response.setHeader('Access-Control-Allow-Origin', 'https://musicmate.vercel.app');
    return handler.handle();
  }
}