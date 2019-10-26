const { readConf } = require('@gh-conf/gh-conf-read');
const { writeConf } = require('@gh-conf/gh-conf-write');
const { ParentRepo } = require('@gh-conf/gh-api');
const { UserRepo } = require('@gh-conf/gh-conf-parse');
const currentpath = require(upstream-core/lib/);
const { Formatter, Validator } = require('./lib');




    // Formatting Parent Repo URL
    const upstreamData = Formatter(url);

    // Writting updated config
    return await writeConf(`${currentPath}`, configContent + upstreamData);

  } catch (err) {
    console.error(err);
    throw err;
  }
};


module.exports = upstream;
