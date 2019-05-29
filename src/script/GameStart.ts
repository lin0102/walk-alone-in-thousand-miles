import {ui} from '../ui/layaMaxUI'
import GameView from './GameView'
import GameRanking from './GameRanking';
import GameIntro from './GameIntro';

export default class GameStart extends ui.gameStartUI {
    public gameView: GameView
    public gameRanking: GameRanking
    public gameIntro: GameIntro

    constructor() {
        super()
        this.begin.on(Laya.Event.CLICK, this, this.startGame)
        this.ranking.on(Laya.Event.CLICK, this, this.toRanking)
        this.intro.on(Laya.Event.CLICK, this, this.toIntro)
    }
    startGame() {
        this.destroy()
        this.gameView = new GameView()
        Laya.stage.addChild(this.gameView)
    }

    toRanking() {
        this.destroy()
        this.gameRanking = new GameRanking()
        Laya.stage.addChild(this.gameRanking)
    }

    toIntro() {
        this.destroy()
        this.gameIntro = new GameIntro()
        Laya.stage.addChild(this.gameIntro)
    }
}