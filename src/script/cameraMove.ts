export default class CameraMoveScript extends Laya.Script3D {
    protected camera:Laya.Camera;
    protected _tempVector3:Laya.Vector3 = new Laya.Vector3();

    constructor() {
        super();
    }
    public onAwake(): void {
        this.camera = this.owner as Laya.Camera;
    }

    public onUpdate():void {
        this.moveForward(-0.03);
    }

    public moveForward(distance: number): void {
        this._tempVector3.x = this._tempVector3.y = 0;
        this._tempVector3.z = distance;
        this.camera.transform.translate(this._tempVector3);
    }


}