import {ui} from '../ui/layaMaxUI'
import GameView from './GameView'
import GameStart from './GameStart'
import GameRanking from './GameRanking'

export default class GameOver extends ui.gameOverUI {
    public gameView:GameView
    public gameStart:GameStart
    public gameRanking:GameRanking
    protected Score: string

    constructor(score: number) {
        super()
        this.againGame.on(Laya.Event.CLICK, this, this.newGame)
        this.toHome.on(Laya.Event.CLICK, this, this.backHome)
        this.toRanking.on(Laya.Event.CLICK, this, this.backRanking)
        this.Score = Math.round(score).toString()
        this.thisScore.text = this.Score
        this.score.text = this.Score
    }

    public newGame() {
        this.destroy()
        this.gameView = new GameView()
        Laya.stage.addChild(this.gameView)
    }

    public backHome() {
        this.destroy()
        this.gameStart = new GameStart(this.Score)
		Laya.stage.addChild(this.gameStart)
    }

    public backRanking() {
        this.destroy()
        this.gameRanking = new GameRanking(this.Score)
		Laya.stage.addChild(this.gameRanking)
    }
}