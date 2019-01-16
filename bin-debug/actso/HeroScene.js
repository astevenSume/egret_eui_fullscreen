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
var HeroScene = (function (_super) {
    __extends(HeroScene, _super);
    function HeroScene() {
        return _super.call(this) || this;
    }
    HeroScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HeroScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var dataArr = [
            { image: 'resource/art/heros_goods/heros01.png', name: 'a亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros02.png', name: 'b亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros03.png', name: 'c亚', value: '评价: 很特么厉害, 为所欲为', isSelected: true },
            { image: 'resource/art/heros_goods/heros04.png', name: 'd亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros05.png', name: 'e亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros06.png', name: 'f亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros07.png', name: 'g亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false }
        ];
        var EUIARR = new eui.ArrayCollection(dataArr);
        this.scr_list.dataProvider = EUIARR;
        this.scr_list.itemRenderer = HeroList_item;
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            SceneManager.toMainScene();
            SceneManager.instance.mainScene.toggleBtn(0);
        }, this);
        this.btn_select.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSelect, this);
    };
    HeroScene.prototype.clickSelect = function () {
        SceneManager.toMainScene();
        SceneManager.instance.mainScene.toggleBtn(0);
        var dataProvider = this.scr_list.dataProvider;
        var arr = [];
        for (var i = 0; i < dataProvider.length; i++) {
            var item = dataProvider.getItemAt(i);
            if (item.isSelected) {
                arr.push(item.name);
            }
        }
        SceneManager.showInfo(arr);
    };
    return HeroScene;
}(eui.Component));
__reflect(HeroScene.prototype, "HeroScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HeroScene.js.map