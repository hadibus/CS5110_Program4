const _ = require('lodash');
const commandLineUsage = require('command-line-usage');
const usage = commandLineUsage(require('./usage.json'));



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
