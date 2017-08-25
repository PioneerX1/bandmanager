export class Member {
  public sectionLeader: boolean = false;
  constructor(
    public name: string,
    public phone: string,
    public email: string,
    public instrument: string,
    public skills: string,
    public travel: boolean,
  ) { }
}
