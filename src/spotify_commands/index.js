import { exec } from "child_process";

export function playMusic() {
  exec("spotify play", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Spotify CLI Output:\n${stdout}`);
  });
}
