export default class marshalMove extends Laya.Script3D {
    // protected rotation:Laya.Vector3 = new Laya.Vector3(0, 0.5, 0);
    protected marshal:Laya.Sprite3D;
    protected x:number;
    protected distance:number;
    protected pos:string = 'm';
    constructor() {
        super();
    }
    onAwake() {
        this.marshal = this.owner as Laya.Sprite3D;
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp)
    }
    onUpdate() {
        this.marshal.transform.translate(new Laya.Vector3(0, 0, -0.03), false);
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

}