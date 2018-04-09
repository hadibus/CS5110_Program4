"use strict";
const banner = require("../assets/banner");
const chalk = require("chalk");
module.exports = [{
        content: chalk.blueBright(banner),
        raw: true
    },
    {
        header: "CS 5110 Program 4 - VCG Auction",
        content: "Simulates a multi-unit auction. Agents bid for ad space on a website. Given the bids and the clicks per unit time on each of the ad locations, this program calculates how much each bidder should pay based on the Vickery Clark Groves criteria. Written by Christopher Jenkins at Utah State University."
    },
    {
        header: "Usage",
        content: [
            '$ node . {bold --bids} {underline comma-separated-values} {bold --ad-clicks} {underline comma-separated-values}',
            '$ node . {bold --help}']
    }
];
