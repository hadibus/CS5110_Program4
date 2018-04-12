"use strict";
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

const bids = options.bids.split(',');
for (var i = 0; i < bids.length; i++)
{
  bids[i] = Number(bids[i]);
}
const ad_clicks = options['ad-clicks'].split(',');
for (var i = 0; i < ad_clicks.length; i++)
{
  ad_clicks[i] = Number(ad_clicks[i]);
}

console.log('bids', bids);
console.log('ad_clicks', ad_clicks);

