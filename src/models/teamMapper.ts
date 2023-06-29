import { TeamBuilder } from '../domain/TeamBuilder';
import { Team } from '../types/team';

export function mapPostResponseToTeam(teamData: Team): Team {
  const {
    id,
    area: { name: country },
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
  } = teamData;

  return new TeamBuilder(name, shortName, tla, crestUrl, clubColors)
    .setId(id)
    .setArea(country)
    .setAddress(address)
    .setPhone(phone)
    .setWebsite(website)
    .setEmail(email)
    .setFounded(founded)
    .setVenue(venue)
    .setLastUpdated()
    .build();
}
