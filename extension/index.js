'use strict';

module.exports = function (nodecg) {
  try {
    require('./game-clock')(nodecg);
  } catch (e) {
    nodecg.log.error('Failed to load "game-clock" lib:', e.stack);
    process.exit(1);
  }
};
