import {ui} from '../ui/layaMaxUI'
import GameStart from './GameStart';

export default class GameRanking extends ui.gameRankingUI {
    public gameStart: GameStart
    protected Score: string

    constructor(score: string) {
        super()
        this.back.on(Laya.Event.CLICK, this, this.toHome)
        this.Score = score
        this.score1.text = score
        this.score2.text = score
    }

    toHome() {
        this.destroy()
        this.gameStart = new GameStart(this.Score)
        Laya.stage.addChild(this.gameStart)
    }
}