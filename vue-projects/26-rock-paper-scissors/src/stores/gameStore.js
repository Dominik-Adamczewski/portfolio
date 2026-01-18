import { defineStore } from 'pinia';

export const GameResult = {
  USER_WON: 'userWon',
  ENEMY_WON: 'enemyWon',
  DRAW: 'draw'
};

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    currentScore: 0,
    availableWeapons: [
      { type: 'paper', imgPath: '/images/icon-paper.svg', imgAlt: 'Hand representing paper' },
      { type: 'rock', imgPath: '/images/icon-rock.svg', imgAlt: 'Hand representing rock' },
      { type: 'scissors', imgPath: '/images/icon-scissors.svg', imgAlt: 'Hand representing scissors icon' }
    ],
    userWeaponObj: null,
    enemyWeaponObj: null,
    currentStep: 1,
    gameResult: null
  }),
  getters: {},
  actions: {
    moveToTheNextStep () {
      if (this.currentStep === 4) {
        return;
      }
      this.currentStep += 1;
    },
    getRandomWeaponForEnemy () {
      const idx = Math.floor(Math.random() * this.availableWeapons.length);
      return this.availableWeapons[idx];
    },
    assignWeaponToTheUser (weapon) {
      this.userWeaponObj = weapon;
    },
    assignWeaponToTheEnemy () {
      this.enemyWeaponObj = this.getRandomWeaponForEnemy();
    },
    updatePlayerScore () {
      this.currentScore += 1;
      this.updateLocalStorageScore(this.currentScore);
    },
    calculateGameResult () {
      const userWeapon = this.userWeaponObj.type;
      const enemyWeapon = this.enemyWeaponObj.type;

      if (userWeapon === enemyWeapon) {
        this.gameResult = GameResult.DRAW;
        return;
      }

      const wins = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      };

      const result = wins[userWeapon] === enemyWeapon ? GameResult.USER_WON : GameResult.ENEMY_WON;

      this.gameResult = result;

      if (result === GameResult.USER_WON) {
        this.updatePlayerScore();
      }
    },
    resetTheGame () {
      this.userWeaponObj = null;
      this.enemyWeaponObj = null;
      this.gameResult = null;
      this.currentStep = 1;
    },
    updateLocalStorageScore (score) {
      localStorage.setItem('playerScore', score);
    },
    getScoreFromLocalStorage () {
      return localStorage.getItem('playerScore');
    },
    clearLastGameScore () {
      this.currentScore = 0;
      localStorage.removeItem('playerScore');
    }
  }
});
