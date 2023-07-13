import { Area } from '../entity/Area';
import { Team } from '../entity/Team';
import { Team as ITeam } from '../types/team';
import { findCountryId } from '../utils/team.utils';

export function fromDataToEntity({
  id,
  area,
  name,
  shortName,
  tla,
  crestUrl,
  address,
  phone,
  website,
  email,
  founded,
  clubColors,
  venue,
}: ITeam): ITeam {
  area: new Area(findCountryId(area.name), area.name);

  return new Team(id, name, shortName, tla, area, crestUrl, clubColors, address, phone, website, email, founded, venue);
}
