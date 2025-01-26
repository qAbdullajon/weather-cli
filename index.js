const getArgs = require("./helpers/args");

const startCli = () => {
  const args = getArgs(process.argv);
  console.log(args);
};

startCli();
