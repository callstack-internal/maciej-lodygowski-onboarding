import {RequestHandler} from 'msw';
import {setupServer} from 'msw/native';
import {afterAll, afterEach, beforeAll} from '@jest/globals';

export const setupAPIMocks = (handlers: RequestHandler[]) => {
  const server = setupServer(...handlers);
  beforeAll(() => {
    server.listen({onUnhandledRequest: 'warn'});
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  return server;
};
