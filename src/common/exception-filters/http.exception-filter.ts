import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    public catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = exception.getStatus();
        const errorMessage = exception.message;

        response.status(statusCode).json({
            message: errorMessage,
            statusCode,
            timestamp: new Date().toISOString(),
        });
    }

}
