import { Router } from 'express';
import teamsRouter from './teamRoute';

const router: Router = Router();

router.use('/teams', teamsRouter);

export default router;
