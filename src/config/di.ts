import DIContainer, { object, use } from 'rsdi';
import { TeamController, TeamService } from '../module/team/module';

function addTeamModuleDefinitions(container: DIContainer): void {
  container.add({
    [TeamService.name]: object(TeamService),
    [TeamController.name]: object(TeamController).construct(use(TeamService)),
  });
}

export function configureDI(): DIContainer {
  const container: DIContainer = new DIContainer();

  addTeamModuleDefinitions(container);

  return container;
}
