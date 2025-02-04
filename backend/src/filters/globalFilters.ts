import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";

@Catch()
export class HttpExceptionFlters implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception 
            instanceof HttpException ?
            exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception instanceof HttpException ?
        exception.getResponse()['message'] ?? exception.getResponse() : 'Internal server error';
        response.status(status).json({
            statusCode: status,
            message,
            timestamp: new Date().toISOString(),
        })
        console.log(exception);
    }
}