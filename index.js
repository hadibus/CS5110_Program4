"use strict";
const commandLineUsage = require('command-line-usage');
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

const bids = options.bids.split(',')
  .sort(function(a, b){return b-a});
for (var i = 0; i < bids.length; i++)
{
  bids[i] = Number(bids[i]);
}

const ad_clicks = options['ad-clicks'].split(',')
  .sort(function(a, b){return b-a});
for (var i = 0; i < ad_clicks.length; i++)
{
  ad_clicks[i] = Number(ad_clicks[i]);
}

console.log('bid quantities are:', bids);
console.log('ad clicks are:     ', ad_clicks);

for (var i = 0; i < bids.length; i++)
{
  //calculate what each agent will pay.
  var total = 0;
  for (var j = i; j < ad_clicks.length && j + 1 < bids.length; j++) 
  {
    total += bids[j+1] * 
      (ad_clicks[j] - (j + 1 == ad_clicks.length? 0 : ad_clicks[j + 1]));
  }
  console.log("A" + i, "pays", total);
}
