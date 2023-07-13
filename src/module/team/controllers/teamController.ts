import { Request, Response, NextFunction } from 'express';
import TeamServices from '../services/teamServices';
import { Team } from '../types/team';

export class TeamController {
  constructor(private readonly teamService: TeamServices) {}

  async index(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const teams: Team[] = await this.teamService.findTeams();
      res.json(teams);
    } catch (err) {
      next(err);
    }
  }

  async view(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = Number(req.params.id);
      const team: Team | undefined = await this.teamService.findTeam(id);

      res.json(team);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const newTeam = await this.teamService.createTeam(req.body);

      res.status(201).json(newTeam);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = Number(req.params.id);
      const teamUpdate = await this.teamService.updateTeam(id, req.body);

      res.status(200).json(teamUpdate);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = Number(req.params.id);
      const teamDelete = await this.teamService.deleteTeam(id);

      res.status(200).json(teamDelete);
    } catch (err) {
      next(err);
    }
  }
}
