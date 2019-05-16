import { ui } from "./../ui/layaMaxUI";
import CameraMove from './CameraMove';
import marshalMove from './marshalMove'

export default class GameUI extends ui.test.TestSceneUI {
    constructor() {
        super();

        const MAXNUMOFSCENE = 1000;

        Laya.Scene3D.load("res/marshal.ls", Laya.Handler.create(null, function (s: Laya.Scene3D): void {
            let scene: Laya.Scene3D = Laya.stage.addChild(s) as Laya.Scene3D;

            scene.enableFog = true;
			scene.fogStart = 1;
			scene.fogRange = 10;

            let sceneMesh: Laya.MeshSprite3D = scene.getChildByName('cjMerge') as Laya.MeshSprite3D;

            let cloneScenes:Laya.MeshSprite3D[] = [];
            for(let i = 0; i < MAXNUMOFSCENE; i++) {
                let cloneScene: Laya.MeshSprite3D = sceneMesh.clone();
                cloneScenes.push(cloneScene);
            }

            let i = 0;
            while(i < 50) {
                scene.addChild(cloneScenes[i++]);
                cloneScenes[i].transform.translate(new Laya.Vector3(0, 0, -3.54 * i), false);
            }

            function loadMoreScene() {
                scene.addChild(cloneScenes[i++]);
                cloneScenes[i].transform.translate(new Laya.Vector3(0, 0, -3.54 * i), false);
                if(i === MAXNUMOFSCENE) {
                    Laya.timer.clear(this, loadMoreScene);
                }
            }
            Laya.timer.loop(2000, this, loadMoreScene);

            let camera: Laya.Camera = scene.getChildByName('Camera') as Laya.Camera;
            camera.addComponent(CameraMove);

            let marshal: Laya.Sprite3D = scene.getChildByName('jiang') as Laya.Sprite3D;
            marshal.addComponent(marshalMove);
        }));
    }
    test() {
        
    }
}