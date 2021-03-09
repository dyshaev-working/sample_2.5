import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  constructor(error: any, errorMessage: string, errorStatus?: number) {
    const message = error.message || errorMessage;
    const status = errorStatus || HttpStatus.INTERNAL_SERVER_ERROR;

    super(Object.assign(error, message), status);
  }
}
