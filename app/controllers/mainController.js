const { Quiz } = require("../models");

const mainController = {
  getHomePage: async () => {
    const test = await Quiz.findAll();
    console.log(JSON.stringify(test, null, 2));
  }
};

module.exports = mainController;