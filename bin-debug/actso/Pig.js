var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Atas = (function () {
    function Atas() {
        console.log(123);
    }
    Atas.prototype.syno = function () {
        console.log('syno');
    };
    return Atas;
}());
__reflect(Atas.prototype, "Atas");
//# sourceMappingURL=Pig.js.map