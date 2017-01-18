(function () {
  'use strict';

  const leftPlayerName = document.getElementById('leftPlayerName');
  const leftCharacters = document.getElementById('leftCharacters');
  const leftScore = document.getElementById('leftScore');
  const rightPlayerName = document.getElementById('rightPlayerName');
  const rightCharacters = document.getElementById('rightCharacters');
  const rightScore = document.getElementById('rightScore');
  const playerInfo = nodecg.Replicant('playerInfo');

  playerInfo.on('change', newVal => {
    leftPlayerName.innerHTML = newVal.leftPlayerName;
    leftCharacters.innerHTML = newVal.leftPlayerCharacters;
    leftScore.innerHTML = newVal.leftPlayerScore;
    rightPlayerName.innerHTML = newVal.rightPlayerName;
    rightCharacters.innerHTML = newVal.rightPlayerCharacters;
    rightScore.innerHTML = newVal.rightPlayerScore;
  });

})();
