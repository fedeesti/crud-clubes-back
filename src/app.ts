import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import DIContainer from 'rsdi';

import { configureDI } from './config/di';
import { initTeamModule } from './module/team/module';
import { errorHandler } from './module/team/middlewares/errorHandler';

export function createApp() {
  const app: Express = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  const diContainer: DIContainer = configureDI();

  initTeamModule(app, diContainer);

  app.use(errorHandler);

  return app;
}
