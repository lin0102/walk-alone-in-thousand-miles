import {ui} from '../ui/layaMaxUI'
import GameView from './GameView'
import GameRanking from './GameRanking';
import GameIntro from './GameIntro';

export default class GameStart extends ui.gameStartUI {
    public gameView: GameView
    public gameRanking: GameRanking
    public gameIntro: GameIntro
    protected Score: string = "30"

    constructor(score: string) {
        super()
        this.begin.on(Laya.Event.CLICK, this, this.startGame)
        this.ranking.on(Laya.Event.CLICK, this, this.toRanking)
        this.intro.on(Laya.Event.CLICK, this, this.toIntro)
        if(score !== "-1") {
            this.Score = score
        }
    }
    startGame() {
        this.destroy()
        this.gameView = new GameView()
        Laya.stage.addChild(this.gameView)
    }

    toRanking() {
        this.destroy()
        this.gameRanking = new GameRanking(this.Score)
        Laya.stage.addChild(this.gameRanking)
    }

    toIntro() {
        this.destroy()
        this.gameIntro = new GameIntro(this.Score)
        Laya.stage.addChild(this.gameIntro)
    }
}