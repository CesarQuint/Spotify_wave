import { isBefore } from "date-fns";
import { sendAuthRequest } from "../../spotify_commands/index.js";
import { LocalStorageService } from "../local.storage.service/local.storage.service.js";

export class Session {
  userData;
  localStorageService;
  constructor() {
    this.verifier();
    this.localStorageService = new LocalStorageService();
    this.userData = null;
  }
  verifier() {
    if (Boolean(this.userData))
      throw new Error("There's already a session please logout");
  }
  async auth(userName, cliendId, clientSecret) {
    const existingToken = await this.localStorageService.loadToken();

    console.log(existingToken);

    if (existingToken) {
      if (isBefore(existingToken.exipes_in, Date.now())) {
        console.log("The token has expired");
      } else {
        console.log("The token is still valid");
      }
      return console.log(existingToken);
    }

    const spotifyAuthResponse = await sendAuthRequest(cliendId, clientSecret);
    this.userData = userName;
    await this.localStorageService.saveToken(spotifyAuthResponse);
    console.log(spotifyAuthResponse);
    console.log(userName);
  }
}
