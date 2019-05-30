import {ui} from '../ui/layaMaxUI'
import GameStart from './GameStart';

export default class GameIntro extends ui.gameIntroUI {
    public gameStart: GameStart
    protected Score: string

    constructor(score: string) {
        super()
        this.Score = score
        this.back.on(Laya.Event.CLICK, this, this.toHome)
    }

    toHome() {
        this.destroy()
        this.gameStart = new GameStart(this.Score)
        Laya.stage.addChild(this.gameStart)
    }
}