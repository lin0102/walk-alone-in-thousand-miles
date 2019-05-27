import {ui} from '../ui/layaMaxUI'
import { enemy, position } from './position'

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
    public Scene: Laya.Scene3D = new Laya.Scene3D()
    public MAXNUMOFSCENE: number = 1000
    public i: number = 0

    constructor() {
        super()
        const resource = [
            "res/marshal.ls",
            "res/enemy/ju/ju.lh",
            "res/enemy/ma/ma.lh",
            "res/marshal/marshal.lh",
            "res/enemy/pao/pao.lh",
            "res/enemy/shi/shi.lh",
            "res/enemy/xiang/xiang.lh"
        ]

        Laya.loader.create(resource, Laya.Handler.create(this, this.LoadScene));
    }

    public LoadScene(): void {
        this.Scene = Laya.stage.addChild(Laya.loader.getRes("res/marshal.ls")) as Laya.Scene3D
        this.Scene.enableFog = true
        this.Scene.fogStart = 1
        this.Scene.fogRange = 10

        let camera: Laya.Camera = this.Scene.getChildByName('Camera') as Laya.Camera
        camera.transform.translate(new Laya.Vector3(0, 0, 0.4), false)
        camera.addComponent(CameraMove)

        let marshal: Laya.Sprite3D = Laya.loader.getRes("res/marshal/marshal.lh")
        this.Scene.addChild(marshal)
        marshal.transform.translate(new Laya.Vector3(0, 0, 1.65))
        marshal.addComponent(marshalMove)

        let models = {}
        models['sceneMesh'] = this.Scene.getChildByName('cjMerge') as Laya.MeshSprite3D
        for (let key in enemy) {
            models[key] = Laya.loader.getRes(`res/enemy/${enemy[key]}/${enemy[key]}.lh`) as Laya.Sprite3D
        }
        this.loadMoreScene(models as ModelValue)
    }

    public loadMoreScene(models: ModelValue): void {
        while (this.i < 50) {
            this.addScene(models)
        }
        Laya.timer.loop(2000, this, this.addMoreScene(models))
    }

    public addMoreScene(models: ModelValue) {
        return () => {
            this.addScene(models)
            if (this.i === this.MAXNUMOFSCENE) {
                Laya.timer.clear(this, this.addMoreScene)
            }
        }
    }

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
        cloneScene.transform.translate(new Laya.Vector3(0, 0, -3.54 * ++this.i), false)
    }

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

}

class CameraMove extends Laya.Script3D {
    protected camera:Laya.Camera;
    protected _tempVector3:Laya.Vector3 = new Laya.Vector3();

    constructor() {
        super();
    }
    public onAwake(): void {
        this.camera = this.owner as Laya.Camera;
    }

    public onUpdate():void {
        this.moveForward(-0.02);
    }

    public moveForward(distance: number): void {
        this._tempVector3.x = this._tempVector3.y = 0;
        this._tempVector3.z = distance;
        this.camera.transform.translate(this._tempVector3);
    }

}

class marshalMove extends Laya.Script3D {
    protected marshal:Laya.Sprite3D;
    protected x:number;
    protected distance:number;
    protected pos:string = 'm';
    protected mapLength: number = 3.54

    constructor() {
        super();
    }
    onAwake() {
        this.marshal = this.owner as Laya.Sprite3D;
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp)
    }
    onUpdate() {
        const x = this.marshal.transform.position.x
        const z = this.marshal.transform.position.z
        const order = Math.floor((1.65 - z) / this.mapLength)
        const deadPosition = position[order].deadPosition
        for(let i = 0; i < deadPosition.length; i++) {
            const coordinate = this.coordinateToPosition(deadPosition[i].x, deadPosition[i].y, order)
            if(x === coordinate.translateX && Math.abs(z - coordinate.translateZ) < 0.01) {
                console.log("游戏结束")
            }
        }
        this.marshal.transform.translate(new Laya.Vector3(0, 0, -0.02), false)
    }
    mouseDown() {
        this.x = Laya.stage.mouseX;
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
		Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
    }
    mouseUp() {
        this.distance = Laya.stage.mouseX - this.x;
        if(this.distance > 100) {
            switch(this.pos) {
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
        } else if(this.distance < -100) {
            switch(this.pos) {
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

    public coordinateToPosition(x: number, y: number, i: number) {
        const translateX: number = 0.32 * (x - 1)
        let translateZ: number
        if (y >= 0 && y <= 4) {
            translateZ = 1.65 - y * 0.45 - i * 3.55
        } else if (y === 5) {
            translateZ = 1.65 - 2.3 - i * 3.55
        } else if (y === 6) {
            translateZ = 1.65 - 2.85 - i * 3.55
        }
        return {translateX, translateZ}
    }

}