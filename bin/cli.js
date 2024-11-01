#!/usr/bin/env node

import { Command } from "commander";
import authenticate from "../src/cli_commands/index.js";

const program = new Command();

program
  .command("auth")
  .description("Authenticate with your Spotify account")
  .action(async () => {
    await authenticate();
  });

program.parse(process.argv);
