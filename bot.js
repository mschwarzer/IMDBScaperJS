/**************

USAGE: nodejs bot.js [-d WORKING-DIR] [-n NUMBER-OF-ACTORS] [--names NAMES-JSON-PATH] [--debug] [--info]

**************/
var imdbscraper = require('./lib/imdbscraper'),
    logger = require('./lib/logger');

// Parse arguments
var argv = require('minimist')(process.argv.slice(2));

// Logger
logger.debugLevel = (argv.debug ? 'debug' : (argv.info ? 'info' : 'warn'));

// Get images
var bot = new imdbscraper();

bot.setNamesPath(argv.names || __dirname + '/names.json');
bot.setWorkingDir(argv.d || __dirname + '/workingdir');
bot.downloadActorImagesBornToday(argv.n || 5);
