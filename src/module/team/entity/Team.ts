import { Area as IArea } from '../types/team';

export class Team {
  lastUpdated: string;
  constructor(
    public id: number | undefined,
    public name: string,
    public shortName: string,
    public tla: string,
    public area: IArea,
    public crestUrl: string,
    public clubColors: string,
    public address: string | null,
    public phone: string | null,
    public website: string | null,
    public email: string | null,
    public founded: number | null,
    public venue: string | null,
  ) {
    this.id = id;
    this.name = name;
    this.shortName = shortName;
    this.tla = tla;
    this.area = area;
    this.crestUrl = crestUrl;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.email = email;
    this.founded = founded;
    this.clubColors = clubColors;
    this.venue = venue;
    this.lastUpdated = new Date().toISOString();
  }
}
