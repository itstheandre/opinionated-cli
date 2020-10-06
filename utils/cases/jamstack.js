const toggle = require("../toggle");

module.exports = {
  question: () => {
    return toggle({
      message: "Which framework will you be using?",
      name: "framework",
      choices: ["nextjs", "gatsby"],
    });
  },
  gatsby: (framework) => {},
  next: (framework) => {},
};
