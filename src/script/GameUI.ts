import { ui } from "./../ui/layaMaxUI"
import CameraMove from './CameraMove'
import marshalMove from './marshalMove'
import position from './position'

export default class GameUI extends ui.test.TestSceneUI {
    public Scene: Laya.Scene3D
    public MAXNUMOFSCENE: number = 1000
    public i: number = 0
    public cloneScenes: Laya.MeshSprite3D[] = []
    constructor() {
        super()
        this.loadScene()
    }
    public loadScene(): void {
        Laya.Scene3D.load("res/marshal.ls", Laya.Handler.create(this, function (s: Laya.Scene3D): void {
            this.Scene = Laya.stage.addChild(s)
            this.Scene.enableFog = true
            this.Scene.fogStart = 1
            this.Scene.fogRange = 10

            let camera: Laya.Camera = this.Scene.getChildByName('Camera') as Laya.Camera
            camera.addComponent(CameraMove)

            // let marshal: Laya.Sprite3D = this.Scene.getChildByName('jiang') as Laya.Sprite3D
            // marshal.addComponent(marshalMove)

            // let enemySprite = {
            //     shi: this.Scene.getChildByName('shi'),
            //     ju: this.Scene.getChildByName('ju'),

            // }

            let sceneMesh: Laya.MeshSprite3D = this.Scene.getChildByName('cjMerge') as Laya.MeshSprite3D
            this.loadMoreScene(sceneMesh)
        }))
    }
    public loadMoreScene(sceneMesh: Laya.MeshSprite3D): void {
        for (let i = 0; i < this.MAXNUMOFSCENE; i++) {
            let cloneScene: Laya.MeshSprite3D = sceneMesh.clone()
            this.cloneScenes.push(cloneScene)
        }

        while (this.i < 50) {
            this.Scene.addChild(this.cloneScenes[this.i])
            this.cloneScenes[this.i].transform.translate(new Laya.Vector3(0, 0, -3.54 * ++this.i), false)
        }

        Laya.timer.loop(2000, this, this.addMoreScene)
    }
    public addMoreScene(): void {
        this.Scene.addChild(this.cloneScenes[this.i])
        this.cloneScenes[this.i].transform.translate(new Laya.Vector3(0, 0, -3.54 * ++this.i), false)
        if (this.i === this.MAXNUMOFSCENE) {
            Laya.timer.clear(this, this.addMoreScene)
        }
    }
}