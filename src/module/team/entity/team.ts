type Area = {
  id: number;
  name: string;
};

export class Team {
  constructor(
    public id: number,
    public area: Area,
    public name: string,
    public shortName: string,
    public tla: string,
    public crestUrl: string,
    public address: string,
    public phone: string,
    public website: string,
    public email: string,
    public founded: number,
    public clubColors: string,
    public venue: string,
  ) {
    this.id = id;
    this.area = area;
    this.name = name;
    this.shortName = shortName;
    this.tla = tla;
    this.crestUrl = crestUrl;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.email = email;
    this.founded = founded;
    this.clubColors = clubColors;
    this.venue = venue;
  }
}
