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
var PlayerScene = (function (_super) {
    __extends(PlayerScene, _super);
    function PlayerScene() {
        return _super.call(this) || this;
    }
    PlayerScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlayerScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var dataArr = [
            { image: "resource/art/profile/skillIcon01.png", name: "旋龙幻杀" },
            { image: "resource/art/profile/skillIcon02.png", name: "天魔咒" },
            { image: "resource/art/profile/skillIcon03.png", name: "望见展" },
            { image: "resource/art/profile/skillIcon04.png", name: "情迷水" },
            { image: "resource/art/profile/skillIcon05.png", name: "真龙霸天" },
            { image: "resource/art/profile/skillIcon06.png", name: "虎嗖" },
            { image: "resource/art/profile/skillIcon07.png", name: "来吧！" }
        ];
        var EUIARR = new eui.ArrayCollection(dataArr);
        this.list_zhuangbei.dataProvider = EUIARR;
        this.scr_zhuangbei.horizontalScrollBar.autoVisibility = false;
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this);
    };
    PlayerScene.prototype.returnMain = function () {
        SceneManager.toMainScene();
        SceneManager.instance.mainScene.toggleBtn(0);
    };
    return PlayerScene;
}(eui.Component));
__reflect(PlayerScene.prototype, "PlayerScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=PlayerScene.js.map