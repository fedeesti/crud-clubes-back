import DIContainer, { object, use } from 'rsdi';
import { TeamController, TeamServices } from '../module/team/module';

function addTeamModuleDefinitions(container: DIContainer): void {
  container.add({
    [TeamServices.name]: object(TeamServices),
    [TeamController.name]: object(TeamController).construct(use(TeamServices)),
  });
}

export function configureDI(): DIContainer {
  const container: DIContainer = new DIContainer();

  addTeamModuleDefinitions(container);

  return container;
}
