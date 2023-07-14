import teams from '../../../../data/equipos.db.json';
import { Team } from '../types/team';
import { fromDataToEntity } from '../mapper/teamMapper';

export class TeamService {
  teams: Team[];

  constructor() {
    this.teams = teams;
  }

  async findTeams(): Promise<Team[]> {
    return this.teams;
  }

  async findTeam(id: number): Promise<Team | undefined> {
    const team = this.teams.find((team) => team.id === id);

    return team;
  }

  async createTeam(teamData: Team): Promise<string> {
    const newTeam = fromDataToEntity(teamData);
    this.teams.push(newTeam);

    return 'The team has been created successfully';
  }

  async updateTeam(id: number, fieldsToUpdate: Partial<Team>): Promise<string> {
    const index = this.teams.findIndex((team) => team.id === id);
    const team = this.teams[index];

    const updateTeam = fromDataToEntity({ ...team, ...fieldsToUpdate });
    this.teams[index] = updateTeam;

    return `the team with ID: ${id} has been updated`;
  }

  async deleteTeam(id: number): Promise<string> {
    const index = this.teams.findIndex((team) => team.id === id);

    this.teams.splice(index, 1);

    return `the team with ID: ${id} has been removed`;
  }
}
