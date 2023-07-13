import { Router } from 'express';
import { checkSchema } from 'express-validator';
import { createTeamSchema, updateTeamSchema } from '../schemas/teamSchema';
import { validatorSchema } from '../middlewares/validatorSchema';
import { validateId } from '../middlewares/validateId';
import { TeamController } from '../controller/teamController';
import TeamService from '../service/teamServices';

const router: Router = Router();
const service = new TeamService();
const teamController = new TeamController(service);

router
  .route('/')
  .get(teamController.index.bind(teamController))
  .post(checkSchema(createTeamSchema), validatorSchema, teamController.create.bind(teamController));

router
  .route('/:id')
  .get(validateId, teamController.view.bind(teamController))
  .put(validateId, checkSchema(updateTeamSchema), validatorSchema, teamController.update.bind(teamController))
  .delete(validateId, teamController.delete.bind(teamController));

export default router;
