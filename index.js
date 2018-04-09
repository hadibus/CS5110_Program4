const _ = require('lodash');
const commandLineUsage = require('command-line-usage');
const use = require('./requires/usage');
const usage = commandLineUsage(require('./requires/usage.js'));

const commandLineArgs = require("command-line-args");

const optionDefinitions = [
  { name: 'bids', type: String },
  { name: 'ad-clicks', type: String }
];

const options = commandLineArgs(optionDefinitions);

if (!options.bids || !options['ad-clicks'])
{
  console.log(usage);
  process.exit();
}

console.log("do work...");
