import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  constructor(error: any, message, status: number) {
    super(
      Object.assign(error, error.message || message),
      status || HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
