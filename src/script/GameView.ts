import { ui } from '../ui/layaMaxUI'
import { enemy, position } from './position'
import GameOver from './GameOver'

interface ModelValue {
    sceneMesh: Laya.MeshSprite3D,
    xiang: Laya.Sprite3D,
    shi: Laya.Sprite3D,
    ju: Laya.Sprite3D,
    pao: Laya.Sprite3D,
    ma: Laya.Sprite3D,
    zu: Laya.Sprite3D
}

export default class GameView extends ui.gameViewUI {
    protected Scene: Laya.Scene3D = new Laya.Scene3D()
    protected Camera: Laya.Camera
    protected marshal: Laya.Sprite3D
    protected marshalScript: Laya.Script3D
    protected MAXNUMOFSCENE: number = 1000
    protected i: number = 0
    protected mapLength: number = 3.54
    protected tempVector3: Laya.Vector3 = new Laya.Vector3(0, 0, -0.018)
    public gameOver: GameOver

    constructor() {
        super()
        this.LoadScene()
    }
    //初始化场景、相机、人物
    public LoadScene(): void {
        this.Scene = Laya.stage.addChild(Laya.loader.getRes("res/marshal.ls")) as Laya.Scene3D
        this.Scene.enableFog = true
        this.Scene.fogStart = 1
        this.Scene.fogRange = 10

        this.Camera = this.Scene.getChildByName('Camera') as Laya.Camera
        this.Camera.transform.position = new Laya.Vector3(0, 0.56, 2.56)

        this.marshal = Laya.loader.getRes("res/marshal/marshal.lh")
        this.Scene.addChild(this.marshal)
        this.marshal.transform.position = new Laya.Vector3(0, 0, 1.2)
        this.marshalScript = this.marshal.addComponent(marshalMove)

        let light: Laya.DirectionLight = new Laya.DirectionLight()
        // this.Scene.addChild(light)
        light.color = new Laya.Vector3(1, 1, 1);
        let mat = light.transform.worldMatrix;
        mat.setForward(new Laya.Vector3(-1.0, -1.0, -1.0));
        light.transform.worldMatrix = mat;

        let models = {}
        models['sceneMesh'] = this.Scene.getChildByName('cjMerge') as Laya.MeshSprite3D
        for (let key in enemy) {
            models[key] = Laya.loader.getRes(`res/enemy/${enemy[key]}/${enemy[key]}.lh`) as Laya.Sprite3D
        }
        this.loadMoreScene(models as ModelValue)

        Laya.timer.loop(20, this, this.gameRun)
    }

    //先加载50个场景到游戏内，防止玩家看到场景加载过程，然后每隔两秒加载一个新场景
    public loadMoreScene(models: ModelValue): void {
        while (this.i < 50) {
            this.addScene(models)
        }
        Laya.timer.loop(2000, this, this.addMoreScene(models))
    }

    //每隔两秒加载一个新场景，直到加载到最大场景数为止
    public addMoreScene(models: ModelValue) {
        return () => {
            this.addScene(models)
            if (this.i === this.MAXNUMOFSCENE) {
                Laya.timer.clear(this, this.addMoreScene)
            }
        }
    }

    //加载新场景的方法
    public addScene(models: ModelValue) {
        const enemyPosition = position[this.i].enemyPosition
        for (let i = 0, length = enemyPosition.length; i < length; i++) {
            const model: Laya.Sprite3D = models[enemyPosition[i].name].clone()
            const x: number = enemyPosition[i].x
            const y: number = enemyPosition[i].y
            this.Scene.addChild(model)
            model.transform.translate(this.coordinateToPosition(x, y, this.i), false)
        }
        let cloneScene = models.sceneMesh.clone()
        this.Scene.addChild(cloneScene)
        cloneScene.transform.translate(new Laya.Vector3(0, 0, - this.mapLength * ++this.i), false)
    }

    //坐标转换为3D世界位置
    public coordinateToPosition(x: number, y: number, i: number): Laya.Vector3 {
        const translateX: number = 0.32 * (x - 1)
        let translateZ: number
        if (y >= 0 && y <= 4) {
            translateZ = 1.65 - y * 0.45 - i * 3.55
        } else if (y === 5) {
            translateZ = 1.65 - 2.3 - i * 3.55
        } else if (y === 6) {
            translateZ = 1.65 - 2.85 - i * 3.55
        }
        return new Laya.Vector3(translateX, 0, translateZ)
    }

    public gameRun() {
        if (this.isGameOver()) {
            Laya.timer.clear(this, this.gameRun)
            Laya.timer.clear(this, this.addMoreScene)
            this.marshalScript.destroy()
            this.i = 0
            Laya.stage.removeChild(this.Scene)
            this.destroy()
            this.gameOver = new GameOver(1.2 - this.marshal.transform.position.z)
            Laya.stage.addChild(this.gameOver)
            return
        }
        this.Camera.transform.translate(this.tempVector3, false)
        this.marshal.transform.translate(this.tempVector3, false)
    }

    public isGameOver(): boolean {
        const x = this.marshal.transform.position.x
        const z = this.marshal.transform.position.z
        const order = Math.floor((1.2 - z) / this.mapLength)
        const deadPosition = position[order].deadPosition
        for (let i = 0; i < deadPosition.length; i++) {
            const coordinate = this.coordinateToPosition(deadPosition[i].x, deadPosition[i].y, order)
            if (x === coordinate.x && Math.abs(z - coordinate.z) < 0.01) {
                console.log("游戏结束")
                return true
            }
        }
    }
}

//人物移动脚本组件
class marshalMove extends Laya.Script3D {
    protected marshal: Laya.Sprite3D;
    protected x: number;
    protected distance: number;
    protected pos: string = 'm';

    constructor() {
        super();
    }
    onAwake() {
        this.marshal = this.owner as Laya.Sprite3D;
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown)
    }

    onDestroy() {
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown)
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp)
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.mouseUp)
    }

    mouseDown() {
        this.x = Laya.stage.mouseX;
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
    }

    mouseUp() {
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp)
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.mouseUp)

        this.distance = Laya.stage.mouseX - this.x;
        if (this.distance > 100) {
            switch (this.pos) {
                case 'l':
                    this.marshal.transform.translate(new Laya.Vector3(0.32, 0, 0), false);
                    this.pos = 'm';
                    break;
                case 'm':
                    this.marshal.transform.translate(new Laya.Vector3(0.32, 0, 0), false);
                    this.pos = 'r';
                    break;
                default:
                    return;
            }
        } else if (this.distance < -100) {
            switch (this.pos) {
                case 'r':
                    this.marshal.transform.translate(new Laya.Vector3(-0.32, 0, 0), false);
                    this.pos = 'm';
                    break;
                case 'm':
                    this.marshal.transform.translate(new Laya.Vector3(-0.32, 0, 0), false);
                    this.pos = 'l';
                    break;
                default:
                    return;
            }

        }
    }
}