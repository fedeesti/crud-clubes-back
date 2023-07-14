import { Area } from '../types/team';

export class Team {
  lastUpdated: string;
  constructor(
    public id: number,
    public area: Area,
    public name: string,
    public shortName: string,
    public tla: string,
    public crestUrl: string,
    public address: string | null,
    public phone: string | null,
    public website: string | null,
    public email: string | null,
    public founded: number | null,
    public clubColors: string,
    public venue: string | null,
  ) {
    this.id = id;
    this.area = area;
    this.name = name;
    this.shortName = shortName;
    this.tla = tla.toUpperCase();
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
