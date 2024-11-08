#!/usr/bin/env node
import { Command } from "commander";

import { authenticate } from "../cli_commands/index.js";

const program = new Command();

program
  .name("spotify-cli")
  .description("CLI to interact with Spotify")
  .version("1.0.0")
  .action(() => {
    console.log("Hello!");
  });

program
  .option("auth ,gui")
  .command("auth")
  .description("Authenticate with your Spotify account")
  .action(async () => {
    await authenticate();
  });

program.parse(process.argv);
