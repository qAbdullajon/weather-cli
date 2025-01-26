import getArgs from "./helpers/args.js";
import getWeather from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist!");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token was saved");
  } catch (error) {
    printError(error.message);
  }
};

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
    return saveToken(args.t);
  }
  // result
  getWeather("Tashkent");
};

startCli();
