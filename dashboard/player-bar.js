(function () {
  'use strict';

  const leftPlayerName = document.getElementById('leftPlayerName');
  const leftPlayerCharacters = document.getElementById('leftPlayerCharacters');
  const leftPlayerScore = document.getElementById('leftPlayerScore');
  const leftPlayerScoreDecrease = document.getElementById('leftPlayerScoreDecrease');
  const leftPlayerScoreIncrease = document.getElementById('leftPlayerScoreIncrease');
  const rightPlayerName = document.getElementById('rightPlayerName');
  const rightPlayerCharacters = document.getElementById('rightPlayerCharacters');
  const rightPlayerScore = document.getElementById('rightPlayerScore');
  const rightPlayerScoreDecrease = document.getElementById('rightPlayerScoreDecrease');
  const rightPlayerScoreIncrease = document.getElementById('rightPlayerScoreIncrease');
  const updatePlayerInfo = document.getElementById('updatePlayerInfo');
  const playerInfo = nodecg.Replicant('playerInfo');

  //pre-fill with existing info
  playerInfo.on('change', newVal => {
    leftPlayerName.value = playerInfo.value.leftPlayerName;
    leftPlayerCharacters.value = playerInfo.value.leftPlayerCharacters;
    leftPlayerScore.value = playerInfo.value.leftPlayerScore;
    rightPlayerName.value = playerInfo.value.rightPlayerName;
    rightPlayerCharacters.value = playerInfo.value.rightPlayerCharacters;
    rightPlayerScore.value = playerInfo.value.rightPlayerScore;
  });

  updatePlayerInfo.addEventListener('click', () => {
    playerInfo.value.leftPlayerName = leftPlayerName.value;
    playerInfo.value.leftPlayerCharacters = leftPlayerCharacters.value;
    playerInfo.value.leftPlayerScore = Number(leftPlayerScore.value);
    playerInfo.value.rightPlayerName = rightPlayerName.value;
    playerInfo.value.rightPlayerCharacters = rightPlayerCharacters.value;
    playerInfo.value.rightPlayerScore = Number(rightPlayerScore.value);
  });

  leftPlayerScoreDecrease.addEventListener('click', () => {
    leftPlayerScore.value = leftPlayerScore.value - 1;
    playerInfo.value.leftPlayerScore = leftPlayerScore.value;
  });

  leftPlayerScoreIncrease.addEventListener('click', () => {
    leftPlayerScore.value = leftPlayerScore.value + 1;
    playerInfo.value.leftPlayerScore = leftPlayerScore.value;
  });

  rightPlayerScoreDecrease.addEventListener('click', () => {
    rightPlayerScore.value = rightPlayerScore.value - 1;
    playerInfo.value.rightPlayerScore = rightPlayerScore.value;
  });

  rightPlayerScoreIncrease.addEventListener('click', () => {
    rightPlayerScore.value = rightPlayerScore.value + 1;
    playerInfo.value.rightPlayerScore = rightPlayerScore.value;
  });

})();
