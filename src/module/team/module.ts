import { Express } from 'express';
import DIContainer from 'rsdi';
import { TeamController } from './controllers/teamController';
import { TeamService } from './service/teamService';
import { configureRoutes } from './routes/teamRoute';

function initTeamModule(app: Express, diContainer: DIContainer) {
  const teamController = diContainer.get(TeamController);

  configureRoutes(app, teamController);
}

export { initTeamModule, TeamController, TeamService };
