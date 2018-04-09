const banner = require("../assets/banner");
console.log(banner);
const chalk = require("chalk");
module.exports = [{
        content: chalk.yellow(banner),
        raw: true
    },
    {
        header: "A typical app",
        content: "Generates something {italic very} important."
    },
    {
        header: "Options",
        optionList: [{
                name: "input",
                typeLabel: "{underline file}",
                description: "The input to process."
            },
            {
                name: "help",
                description: "Print this usage guide."
            }
        ]
    }
];
