import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CorrelationMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers[`X-Correlation-Id`]) {
      req.headers[`X-Correlation-Id`] = randomUUID();
    }

    next();
  }
}
