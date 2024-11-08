import fs from "fs/promises";
import path from "path";
import os from "os";
import { add } from "date-fns";

export class LocalStorageService {
  getConfigDirectory() {
    const homeDir = os.homedir();
    const configDir =
      process.platform === "win32"
        ? path.join(homeDir, "AppData", "Roaming", "spotify-cli")
        : path.join(homeDir, ".config", "spotify-cli");

    return configDir;
  }

  getTokenFilePath = () => path.join(this.getConfigDirectory(), "token.json");

  ensureConfigDirectory = async () => {
    const configDir = this.getConfigDirectory();
    try {
      await fs.mkdir(configDir, { recursive: true });
    } catch (error) {
      console.error(`Could not create config directory: ${error.message}`);
    }
  };

  // Save the token to a file
  saveToken = async (tokenData) => {
    await this.ensureConfigDirectory();
    const dataToSave = {
      ...tokenData,
      expires_in: add(new Date(), { hours: 1 }),
    };
    const tokenFilePath = this.getTokenFilePath();
    await fs.writeFile(tokenFilePath, JSON.stringify(dataToSave, null, 2));
  };

  loadToken = async () => {
    try {
      const tokenFilePath = this.getTokenFilePath();
      const data = await fs.readFile(tokenFilePath, "utf8");
      return JSON.parse(data);
    } catch (err) {
      console.log(err);
      return null;
    }
  };
}
