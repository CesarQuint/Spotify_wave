import { input } from "@inquirer/prompts";
import { SpotifyWaveCli } from "../service/spotifyWave.cli.js";

export async function authenticate() {
  const answers = {
    username: await input({ message: "Please enter your Spotify username:" }),
    tokenA: await input({ message: "Please enter your ClientId:" }),
    tokenB: await input({ message: "Please enter your ClientSecret:" }),
  };
  const service = new SpotifyWaveCli();
  service.logIn(answers.username, answers.tokenA, answers.tokenB);
}
