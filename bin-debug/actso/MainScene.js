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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
        // this.mbg_img.width = SceneManager.swidth
        // this.mbg_img.height = SceneManager.sheight
        // this.mbg_img.width = SceneManager.instance.width
        // this.mbg_img.height = SceneMan	ager.instance.height
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
        this.Group_mbtn.touchEnabled = true;
        this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (e.target.numElements) {
                console.log('按到组对象上了。。。');
                return;
            }
            var theBtn = e.target;
            if (theBtn.selected) {
                _this.toggleBtn(theBtn);
            }
            else {
                theBtn.selected = true;
            }
        }, this);
    };
    MainScene.prototype.toggleBtn = function (btn) {
        console.log('切换');
        for (var i = 0; i < this.Group_mbtn.numChildren; i++) {
            var theBtn = this.Group_mbtn.getChildAt(i);
            theBtn.selected = false;
        }
        if (btn === 0) {
            console.log('返回');
            return;
        }
        btn = btn;
        btn.selected = true;
        var index = this.Group_mbtn.getChildIndex(btn);
        switch (index) {
            case 0:
                SceneManager.toPlayerScene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 1:
                SceneManager.toHeroScene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainScene.js.map