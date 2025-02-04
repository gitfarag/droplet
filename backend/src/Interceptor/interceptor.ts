import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { count } from 'console';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class globalInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>{
        console.log('before...');
        const now = Date.now();
        return next
        .handle()
        .pipe(
            map((data)=>{
                console.log(`After... ${Date.now() - now}ms`);              
                return {
                    statusCode: HttpStatus.OK,
                    data: data,
                    message: 'success',
                    timestamp: new Date().toISOString(),
                }
            })
        )

        
    }
}