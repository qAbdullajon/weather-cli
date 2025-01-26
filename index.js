import getArgs from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";

const startCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    // help
    printHelp();
  }
  if (args.s) {
    // save
  }
  if (args.t) {
    // save token
  }
  // result
};

startCli();
