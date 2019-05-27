import {ui} from '../ui/layaMaxUI'
import GameView from './GameView'

export default class GameStart extends ui.gameStartUI {
    public static gameView:GameView
    constructor() {
        super()
        this.begin.on(Laya.Event.CLICK, this, this.startGame)
    }
    startGame() {
        this.removeSelf()
        if(!GameStart.gameView) {
            GameStart.gameView = new GameView()
        }
        Laya.stage.addChild(GameStart.gameView)
    }
}