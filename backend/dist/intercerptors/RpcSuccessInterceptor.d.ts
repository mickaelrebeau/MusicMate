import { ExecutionContext, CallHandler } from '@nestjs/common';
interface responsePayloadNatsInterface {
    paginate?: object;
    statusCode?: number;
    datas: any;
}
export declare class RpcSuccessInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler): import("rxjs").Observable<responsePayloadNatsInterface>;
}
export {};
