const reactRouter = require('./jsx');

module.exports = {
    plugin: reactRouter,
    phase: "execution", 
    module: "jsxCompose"
};