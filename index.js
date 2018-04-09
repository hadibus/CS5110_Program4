const _ = require('lodash');
const commandLineUsage = require('command-line-usage');
const use = require('./requires/usage');
console.log(use);
const usage = commandLineUsage(require('./requires/usage.js'));

console.log(usage);

const commandLineArgs = require("command-line-args");

const optionDefinitions = [
  { name: 'bids', type: String, defaultValue: false },
  { name: 'slot-clicks', type: String, defaultValue: false},
  { name: 'help', type: Boolean, defaultValue: false }
];

const options = commandLineArgs(optionDefinitions);

if (options.help)
{
  console.log(usage);
  process.exit();
}
if (!options.bids || !options['slot-clicks'])
{
  console.log('Try \'node . --help\' for usage information.'); 
}
