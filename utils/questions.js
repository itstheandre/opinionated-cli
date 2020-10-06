const toggle = require("./toggle");

module.exports = {
  getLanguage: async () => {
    const languages = await toggle({
      message: "Please chose a language",
      name: "language",
      choices: ["js", "ts"],
    });

    return languages;
  },
  getTechStack: async () => {
    const stack = await toggle({
      message: "Please choose a type of project you are building",
      name: "stack",
      choices: [
        "full-stack-monorepo",
        "jamstack",
        "full-stack-seperate",
        "frontend",
      ],
    });

    return stack;
  },
};
