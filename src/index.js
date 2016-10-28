import './game.css';
import Game from './Game.js';
//////////////////////////////////////////

var game = new Game();

const ms = 30;
(function gameLoop() {
	game.render();
  setTimeout(gameLoop, ms);
}());
/////////////////////////////////////////////
