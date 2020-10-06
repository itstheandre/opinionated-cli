const { Select } = require("enquirer");
const to = require("await-to-js").default;
const shouldCancel = require("cli-should-cancel");
const handleEror = require("cli-handle-error");

module.exports = async ({ message, name, choices }) => {
  const [err, res] = await to(
    new Select({
      message,
      name,
      choices,
      validate(value) {
        return !value ? "You must choose an option" : true;
      },
    })
      .on("cancel", () => shouldCancel())
      .run()
  );

  handleEror("Select", err);
  return res;
};
