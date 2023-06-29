import { Area } from '../types/team';

export class Team {
  id: number | undefined;
  area!: Area;
  address!: string | null;
  phone!: string | null;
  website!: string | null;
  email!: string | null;
  founded!: number | null;
  venue!: string | null;
  lastUpdated!: string;

  constructor(
    public name: string,
    public shortName: string,
    public tla: string,
    public crestUrl: string,
    public clubColors: string,
  ) {}
}
