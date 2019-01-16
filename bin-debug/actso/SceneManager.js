var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this.mainScene = new MainScene();
        _this.playerScene = new PlayerScene();
        _this.heroScene = new HeroScene();
        _this.goodsScene = new GoodsScene();
        _this.aboutScene = new AboutScene();
        return _this;
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
        // SceneManager.swidth = s.width
        // SceneManager.sheight = s.height
        // console.log('main width: ' + SceneManager.swidth);
        // console.log('main height ' + SceneManager.sheight);
    };
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage;
        var mainScene = SceneManager.instance.mainScene;
        if (!mainScene.parent) {
            stage.addChild(mainScene);
        }
        // if (!SceneManager.instance.playerScene.parent) {
        //     mainScene.removeChild(SceneManager.instance.playerScene)
        // }
        SceneManager.instance.removeOther(mainScene);
    };
    SceneManager.toPlayerScene = function () {
        this.instance.removeOther(this.instance.playerScene);
        this.instance.mainScene.addChild(this.instance.playerScene);
    };
    SceneManager.toHeroScene = function () {
        this.instance.removeOther(this.instance.heroScene);
        this.instance.mainScene.addChild(this.instance.heroScene);
    };
    SceneManager.showInfo = function (arr) {
        var text = '您的英雄是： ';
        if (arr.length === 0) {
            text = 'nothing selected!!!';
        }
        else {
            text += arr.toString();
        }
        var img = new egret.Bitmap();
        img.texture = RES.getRes('toast-bg_png');
        SceneManager.instance.mainScene.addChild(img);
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2;
        img.y = 500;
        img.height = 40;
        var label = new egret.TextField();
        label.text = text;
        label.size = 20;
        SceneManager.instance.mainScene.addChild(label);
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2;
        label.y = 510;
        label.height = 40;
        var timer = new egret.Timer(1000, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            SceneManager.instance.mainScene.removeChild(label);
            SceneManager.instance.mainScene.removeChild(img);
        }, this);
    };
    SceneManager.prototype.removeOther = function (scene) {
        var _this = this;
        var arr = [this.playerScene, this.heroScene, this.goodsScene, this.aboutScene];
        arr.forEach(function (item) {
            if (scene === item)
                return;
            if (item.parent) {
                _this.mainScene.removeChild(item);
            }
        });
    };
    return SceneManager;
}(egret.Sprite));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map