import { Team } from './Team';
import { findCountryId, generateId } from '../utils/team.utils';
import { Team as ITeam } from '../types/team';

export class TeamBuilder {
  private team: ITeam;

  constructor(name: string, shortName: string, tla: string, crestUrl: string, clubColors: string) {
    this.team = new Team(name, shortName, tla, crestUrl, clubColors);
  }

  setId(id: number | undefined) {
    if (id) {
      this.team.id = id;
      return this;
    }

    this.team.id = generateId();
    return this;
  }

  setArea(country: string) {
    const area = {
      id: findCountryId(country),
      name: country,
    };
    this.team.area = area;

    return this;
  }

  setAddress(address: string | null) {
    this.team.address = address || null;
    return this;
  }

  setPhone(phone: string | null) {
    this.team.phone = phone || null;
    return this;
  }

  setWebsite(website: string | null) {
    this.team.website = website || null;
    return this;
  }

  setEmail(email: string | null) {
    this.team.email = email || null;
    return this;
  }
  setFounded(founded: number | null) {
    this.team.founded = founded || null;
    return this;
  }
  setVenue(venue: string | null) {
    this.team.venue = venue || null;
    return this;
  }

  setLastUpdated() {
    this.team.lastUpdated = new Date().toISOString();
    return this;
  }

  build(): ITeam {
    console.log(this.team);
    return this.team;
  }
}
