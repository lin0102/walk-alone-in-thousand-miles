import {ui} from '../ui/layaMaxUI'
import GameStart from './GameStart';

export default class GameIntro extends ui.gameIntroUI {
    public gameStart: GameStart

    constructor() {
        super()
        this.back.on(Laya.Event.CLICK, this, this.toHome)
    }

    toHome() {
        this.destroy()
        this.gameStart = new GameStart()
        Laya.stage.addChild(this.gameStart)
    }
}