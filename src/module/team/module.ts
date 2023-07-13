import { Express } from 'express';
import DIContainer from 'rsdi';
import { TeamController } from './controllers/teamController';
import TeamServices from './services/teamServices';
import { configureRoutes } from './routes/teams.routes';

function initTeamModule(app: Express, diContainer: DIContainer) {
  const teamController = diContainer.get(TeamController);

  configureRoutes(app, teamController);
}

export { initTeamModule, TeamController, TeamServices };
