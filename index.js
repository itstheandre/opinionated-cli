#! /usr/bin/env node

const { getLanguage, getTechStack } = require("./utils/questions");

async function main() {
  console.log(await getLanguage());
  console.log(await getTechStack());
}

main();
