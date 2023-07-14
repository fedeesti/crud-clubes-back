import { Area } from '../entity/Area';
import { Team } from '../entity/Team';
import { Team as ITeam } from '../types/team';
import { findCountryId, generateId } from '../utils/team.utils';

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
  if (!id) {
    id = generateId();
  }

  area = new Area(findCountryId(area.name), area.name);

  return new Team(id, area, name, shortName, tla, crestUrl, address, phone, website, email, founded, clubColors, venue);
}
