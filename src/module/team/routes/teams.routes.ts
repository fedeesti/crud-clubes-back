import { Express } from 'express';
import { checkSchema } from 'express-validator';
import { createTeamSchema, updateTeamSchema } from '../schemas/team.schema';
import { validatorSchema } from '../middlewares/validatorSchema';
import { validateId } from '../middlewares/validateId';
import { TeamController } from '../module';

const ROUTE_BASE = '/api/v1/teams';

export function configureRoutes(app: Express, teamController: TeamController) {
  app
    .route(`${ROUTE_BASE}/`)
    .get(teamController.index.bind(teamController))
    .post(checkSchema(createTeamSchema), validatorSchema, teamController.create.bind(teamController));

  app
    .route(`${ROUTE_BASE}/:id`)
    .get(validateId, teamController.view.bind(teamController))
    .put(validateId, checkSchema(updateTeamSchema), validatorSchema, teamController.update.bind(teamController))
    .delete(validateId, teamController.delete.bind(teamController));
}
