import { Session } from "./session.service/session.service.js";
export class SpotifyWaveCli {
  session;
  constructor() {
    this.session = new Session();
  }

  logIn(userName, cliendId, cliendSecret) {
    this.session.auth(userName, cliendId, cliendSecret);
  }
}
