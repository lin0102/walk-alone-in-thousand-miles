var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var GameUI_1 = require("./script/GameUI");
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
        reg("script/GameUI.ts", GameUI_1.default);
    };
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/TestScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = true;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();
},{"./script/GameUI":4}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var Main = /** @class */ (function () {
    function Main() {
        //根据IDE设置初始化引擎		
        if (window["Laya3D"])
            Laya3D.init(GameConfig_1.default.width, GameConfig_1.default.height);
        else
            Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        //加载IDE指定的场景
        GameConfig_1.default.startScene && Laya.Scene.open(GameConfig_1.default.startScene);
    };
    return Main;
}());
//激活启动类
new Main();
},{"./GameConfig":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CameraMoveScript = /** @class */ (function (_super) {
    __extends(CameraMoveScript, _super);
    function CameraMoveScript() {
        var _this = _super.call(this) || this;
        _this._tempVector3 = new Laya.Vector3();
        return _this;
    }
    CameraMoveScript.prototype.onAwake = function () {
        this.camera = this.owner;
    };
    CameraMoveScript.prototype.onUpdate = function () {
        this.moveForward(-0.03);
    };
    CameraMoveScript.prototype.moveForward = function (distance) {
        this._tempVector3.x = this._tempVector3.y = 0;
        this._tempVector3.z = distance;
        this.camera.transform.translate(this._tempVector3);
    };
    return CameraMoveScript;
}(Laya.Script3D));
exports.default = CameraMoveScript;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("./../ui/layaMaxUI");
var CameraMove_1 = require("./CameraMove");
var marshalMove_1 = require("./marshalMove");
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super.call(this) || this;
        var MAXNUMOFSCENE = 1000;
        Laya.Scene3D.load("res/marshal.ls", Laya.Handler.create(null, function (s) {
            var scene = Laya.stage.addChild(s);
            scene.enableFog = true;
            scene.fogStart = 1;
            scene.fogRange = 10;
            var sceneMesh = scene.getChildByName('cjMerge');
            var cloneScenes = [];
            for (var i_1 = 0; i_1 < MAXNUMOFSCENE; i_1++) {
                var cloneScene = sceneMesh.clone();
                cloneScenes.push(cloneScene);
            }
            var i = 0;
            while (i < 50) {
                scene.addChild(cloneScenes[i++]);
                cloneScenes[i].transform.translate(new Laya.Vector3(0, 0, -3.54 * i), false);
            }
            function loadMoreScene() {
                scene.addChild(cloneScenes[i++]);
                cloneScenes[i].transform.translate(new Laya.Vector3(0, 0, -3.54 * i), false);
                if (i === MAXNUMOFSCENE) {
                    Laya.timer.clear(this, loadMoreScene);
                }
            }
            Laya.timer.loop(2000, this, loadMoreScene);
            var camera = scene.getChildByName('Camera');
            camera.addComponent(CameraMove_1.default);
            var marshal = scene.getChildByName('jiang');
            marshal.addComponent(marshalMove_1.default);
        }));
        return _this;
    }
    GameUI.prototype.test = function () {
    };
    return GameUI;
}(layaMaxUI_1.ui.test.TestSceneUI));
exports.default = GameUI;
},{"./../ui/layaMaxUI":6,"./CameraMove":3,"./marshalMove":5}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marshalMove = /** @class */ (function (_super) {
    __extends(marshalMove, _super);
    function marshalMove() {
        var _this = _super.call(this) || this;
        _this.pos = 'm';
        return _this;
    }
    marshalMove.prototype.onAwake = function () {
        this.marshal = this.owner;
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
    };
    marshalMove.prototype.onUpdate = function () {
        this.marshal.transform.translate(new Laya.Vector3(0, 0, -0.03), false);
    };
    marshalMove.prototype.mouseDown = function () {
        this.x = Laya.stage.mouseX;
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
    };
    marshalMove.prototype.mouseUp = function () {
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
        }
        else if (this.distance < -100) {
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
    };
    return marshalMove;
}(Laya.Script3D));
exports.default = marshalMove;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var REG = Laya.ClassUtils.regClass;
var ui;
(function (ui) {
    var test;
    (function (test) {
        var TestSceneUI = /** @class */ (function (_super) {
            __extends(TestSceneUI, _super);
            function TestSceneUI() {
                return _super.call(this) || this;
            }
            TestSceneUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("test/TestScene");
            };
            return TestSceneUI;
        }(Laya.Scene));
        test.TestSceneUI = TestSceneUI;
        REG("ui.test.TestSceneUI", TestSceneUI);
    })(test = ui.test || (ui.test = {}));
})(ui = exports.ui || (exports.ui = {}));
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0Rvd25sb2Fkcy9Db21wcmVzc2VkL0xheWFBaXJJREUvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvTWFpbi50cyIsInNyYy9zY3JpcHQvQ2FtZXJhTW92ZS50cyIsInNyYy9zY3JpcHQvR2FtZVVJLnRzIiwic3JjL3NjcmlwdC9tYXJzaGFsTW92ZS50cyIsInNyYy91aS9sYXlhTWF4VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVkEsZ0dBQWdHO0FBQ2hHLDBDQUFvQztBQUNwQzs7RUFFRTtBQUNGO0lBYUk7SUFBYyxDQUFDO0lBQ1IsZUFBSSxHQUFYO1FBQ0ksSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDN0MsR0FBRyxDQUFDLGtCQUFrQixFQUFDLGdCQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBaEJNLGdCQUFLLEdBQVEsR0FBRyxDQUFDO0lBQ2pCLGlCQUFNLEdBQVEsSUFBSSxDQUFDO0lBQ25CLG9CQUFTLEdBQVEsWUFBWSxDQUFDO0lBQzlCLHFCQUFVLEdBQVEsTUFBTSxDQUFDO0lBQ3pCLGlCQUFNLEdBQVEsS0FBSyxDQUFDO0lBQ3BCLGlCQUFNLEdBQVEsTUFBTSxDQUFDO0lBQ3JCLHFCQUFVLEdBQUssc0JBQXNCLENBQUM7SUFDdEMsb0JBQVMsR0FBUSxFQUFFLENBQUM7SUFDcEIsZ0JBQUssR0FBUyxLQUFLLENBQUM7SUFDcEIsZUFBSSxHQUFTLElBQUksQ0FBQztJQUNsQix1QkFBWSxHQUFTLEtBQUssQ0FBQztJQUMzQiw0QkFBaUIsR0FBUyxJQUFJLENBQUM7SUFNMUMsaUJBQUM7Q0FsQkQsQUFrQkMsSUFBQTtrQkFsQm9CLFVBQVU7QUFtQi9CLFVBQVUsQ0FBQyxJQUFJLEVB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RyxHQUFHLENBQUM7b0JBQ2YsTUFBTTtnQkFDVjtvQkFDSSxPQUFPO2FBQ2Q7U0FFSjtJQUNMLENBQUM7SUFFTCxrQkFBQztBQUFELENBdERBLEFBc0RDLENBdER3QyxJQUFJLENBQUMsUUFBUSxHQXNEckQ7Ozs7O0FDbERELElBQUksR0FBRyxHQUFhLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0FBQzdDLElBQWMsRUFBRSxDQVNmO0FBVEQsV0FBYyxFQUFFO0lBQUMsSUFBQSxJQUFJLENBU3BCO0lBVGdCLFdBQUEsSUFBSTtRQUNqQjtZQUFpQywrQkFBVTtZQUN2Qzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsb0NBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFDTCxrQkFBQztRQUFELENBTkEsQUFNQyxDQU5nQyxJQUFJLENBQUMsS0FBSyxHQU0xQztRQU5ZLGdCQUFXLGNBTXZCLENBQUE7UUFDRCxHQUFHLENBQUMscUJBQXFCLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxFQVRnQixJQUFJLEdBQUosT0FBSSxLQUFKLE9BQUksUUFTcEI7QUFBRCxDQUFDLEVBVGEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBU2YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBHYW1lVUkgZnJvbSBcIi4vc2NyaXB0L0dhbWVVSVwiXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj02NDA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xMTM2O1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJsZWZ0XCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJ0ZXN0L1Rlc3RTY2VuZS5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJzY3JpcHQvR2FtZVVJLnRzXCIsR2FtZVVJKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFNb3ZlU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQzRCB7XHJcbiAgICBwcm90ZWN0ZWQgY2FtZXJhOkxheWEuQ2FtZXJhO1xyXG4gICAgcHJvdGVjdGVkIF90ZW1wVmVjdG9yMzpMYXlhLlZlY3RvcjMgPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkF3YWtlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5vd25lciBhcyBMYXlhLkNhbWVyYTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25VcGRhdGUoKTp2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVGb3J3YXJkKC0wLjAzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZUZvcndhcmQoZGlzdGFuY2U6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3RlbXBWZWN0b3IzLnggPSB0aGlzLl90ZW1wVmVjdG9yMy55ID0gMDtcclxuICAgICAgICB0aGlzLl90ZW1wVmVjdG9yMy56ID0gZGlzdGFuY2U7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudHJhbnNmb3JtLnRyYW5zbGF0ZSh0aGlzLl90ZW1wVmVjdG9yMyk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4vLi4vdWkvbGF5YU1heFVJXCI7XHJcbmltcG9ydCBDYW1lcmFNb3ZlIGZyb20gJy4vQ2FtZXJhTW92ZSc7XHJcbmltcG9ydCBtYXJzaGFsTW92ZSBmcm9tICcuL21hcnNoYWxNb3ZlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIGV4dGVuZHMgdWkudGVzdC5UZXN0U2NlbmVVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBNQVhOVU1PRlNDRU5FID0gMTAwMDtcclxuXHJcbiAgICAgICAgTGF5YS5TY2VuZTNELmxvYWQoXCJyZXMvbWFyc2hhbC5sc1wiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKG51bGwsIGZ1bmN0aW9uIChzOiBMYXlhLlNjZW5lM0QpOiB2b2lkIHtcclxuICAgICAgICAgICAgbGV0IHNjZW5lOiBMYXlhLlNjZW5lM0QgPSBMYXlhLnN0YWdlLmFkZENoaWxkKHMpIGFzIExheWEuU2NlbmUzRDtcclxuXHJcbiAgICAgICAgICAgIHNjZW5lLmVuYWJsZUZvZyA9IHRydWU7XHJcblx0XHRcdHNjZW5lLmZvZ1N0YXJ0ID0gMTtcclxuXHRcdFx0c2NlbmUuZm9nUmFuZ2UgPSAxMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzY2VuZU1lc2g6IExheWEuTWVzaFNwcml0ZTNEID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoJ2NqTWVyZ2UnKSBhcyBMYXlhLk1lc2hTcHJpdGUzRDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbG9uZVNjZW5lczpMYXlhLk1lc2hTcHJpdGUzRFtdID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBNQVhOVU1PRlNDRU5FOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbG9uZVNjZW5lOiBMYXlhLk1lc2hTcHJpdGUzRCA9IHNjZW5lTWVzaC5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgY2xvbmVTY2VuZXMucHVzaChjbG9uZVNjZW5lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZShpIDwgNTApIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLmFkZENoaWxkKGNsb25lU2NlbmVzW2krK10pO1xyXG4gICAgICAgICAgICAgICAgY2xvbmVTY2VuZXNbaV0udHJhbnNmb3JtLnRyYW5zbGF0ZShuZXcgTGF5YS5WZWN0b3IzKDAsIDAsIC0zLjU0ICogaSksIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbG9hZE1vcmVTY2VuZSgpIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLmFkZENoaWxkKGNsb25lU2NlbmVzW2krK10pO1xyXG4gICAgICAgICAgICAgICAgY2xvbmVTY2VuZXNbaV0udHJhbnNmb3JtLnRyYW5zbGF0ZShuZXcgTGF5YS5WZWN0b3IzKDAsIDAsIC0zLjU0ICogaSksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT09IE1BWE5VTU9GU0NFTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIGxvYWRNb3JlU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIExheWEudGltZXIubG9vcCgyMDAwLCB0aGlzLCBsb2FkTW9yZVNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYW1lcmE6IExheWEuQ2FtZXJhID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoJ0NhbWVyYScpIGFzIExheWEuQ2FtZXJhO1xyXG4gICAgICAgICAgICBjYW1lcmEuYWRkQ29tcG9uZW50KENhbWVyYU1vdmUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1hcnNoYWw6IExheWEuU3ByaXRlM0QgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZSgnamlhbmcnKSBhcyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICBtYXJzaGFsLmFkZENvbXBvbmVudChtYXJzaGFsTW92ZSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgdGVzdCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hcnNoYWxNb3ZlIGV4dGVuZHMgTGF5YS5TY3JpcHQzRCB7XHJcbiAgICAvLyBwcm90ZWN0ZWQgcm90YXRpb246TGF5YS5WZWN0b3IzID0gbmV3IExheWEuVmVjdG9yMygwLCAwLjUsIDApO1xyXG4gICAgcHJvdGVjdGVkIG1hcnNoYWw6TGF5YS5TcHJpdGUzRDtcclxuICAgIHByb3RlY3RlZCB4Om51bWJlcjtcclxuICAgIHByb3RlY3RlZCBkaXN0YW5jZTpudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgcG9zOnN0cmluZyA9ICdtJztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBvbkF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMubWFyc2hhbCA9IHRoaXMub3duZXIgYXMgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5tb3VzZURvd24pO1xyXG4gICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5NT1VTRV9VUCwgdGhpcywgdGhpcy5tb3VzZVVwKVxyXG4gICAgfVxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tYXJzaGFsLnRyYW5zZm9ybS50cmFuc2xhdGUobmV3IExheWEuVmVjdG9yMygwLCAwLCAtMC4wMyksIGZhbHNlKTtcclxuICAgIH1cclxuICAgIG1vdXNlRG93bigpIHtcclxuICAgICAgICB0aGlzLnggPSBMYXlhLnN0YWdlLm1vdXNlWDtcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfVVAsIHRoaXMsIHRoaXMub25Nb3VzZVVwKTtcclxuXHRcdExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5NT1VTRV9PVVQsIHRoaXMsIHRoaXMub25Nb3VzZVVwKTtcclxuICAgIH1cclxuICAgIG1vdXNlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IExheWEuc3RhZ2UubW91c2VYIC0gdGhpcy54O1xyXG4gICAgICAgIGlmKHRoaXMuZGlzdGFuY2UgPiAxMDApIHtcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMucG9zKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcnNoYWwudHJhbnNmb3JtLnRyYW5zbGF0ZShuZXcgTGF5YS5WZWN0b3IzKDAuMzIsIDAsIDApLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3MgPSAnbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcnNoYWwudHJhbnNmb3JtLnRyYW5zbGF0ZShuZXcgTGF5YS5WZWN0b3IzKDAuMzIsIDAsIDApLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3MgPSAncic7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5kaXN0YW5jZSA8IC0xMDApIHtcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMucG9zKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcnNoYWwudHJhbnNmb3JtLnRyYW5zbGF0ZShuZXcgTGF5YS5WZWN0b3IzKC0wLjMyLCAwLCAwKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zID0gJ20nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJzaGFsLnRyYW5zZm9ybS50cmFuc2xhdGUobmV3IExheWEuVmVjdG9yMygtMC4zMiwgMCwgMCksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcyA9ICdsJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcclxudmFyIFJFRzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbmV4cG9ydCBtb2R1bGUgdWkudGVzdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFNjZW5lVUkgZXh0ZW5kcyBMYXlhLlNjZW5lIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwidGVzdC9UZXN0U2NlbmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkudGVzdC5UZXN0U2NlbmVVSVwiLFRlc3RTY2VuZVVJKTtcclxufVxyXG4iXX0=