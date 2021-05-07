const reddinx = require('reddinx');
const config = require('../lib/reddit/config.js');

(async () => {
  const subredditName = 'terrainbuilding';
  await reddinx.initial(subredditName, config);
})();
