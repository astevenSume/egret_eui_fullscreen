class SceneManager extends egret.Sprite {
    private _stage:eui.UILayer    
    public mainScene:MainScene
    public playerScene:PlayerScene
    public heroScene:HeroScene
    public goodsScene:GoodsScene
    public aboutScene:AboutScene
    static swidth //屏幕宽度
    static sheight

    constructor() {
        super()
        this.mainScene = new MainScene()
        this.playerScene = new PlayerScene()
        this.heroScene = new HeroScene()
        this.goodsScene = new GoodsScene()
        this.aboutScene = new AboutScene()        
    } 

    static sceneManager:SceneManager
    static get instance() {
        if (!this.sceneManager) {
            this.sceneManager = new SceneManager() 
        }
        return this.sceneManager
    }

    public setStage(s:eui.UILayer){
        this._stage = s
    }

    static toMainScene() {
        let stage:eui.UILayer = this.instance._stage
        let mainScene = SceneManager.instance.mainScene
        

        if (!mainScene.parent) {
            stage.addChild(mainScene)  
        }

        // if (!SceneManager.instance.playerScene.parent) {
        //     mainScene.removeChild(SceneManager.instance.playerScene)
        // }

        SceneManager.instance.removeOther(mainScene)
    }
    static toPlayerScene() {
        // let stage:eui.UILayer = this.instance._stage
        this.instance.removeOther(this.instance.playerScene)
        // stage.addChild(this.instance.playerScene)
        this.instance.mainScene.addChild(this.instance.playerScene)
    }
    static toHeroScene() {
        this.instance.removeOther(this.instance.heroScene)
        this.instance.mainScene.addChild(this.instance.heroScene)
    }
    static showInfo(arr: string[]) {
        let text = '您的英雄是： '
        if (arr.length===0) {
            text = 'nothing selected!!!'
        } else {
            text += arr.toString()
        }

        let img:egret.Bitmap = new egret.Bitmap()
        img.texture = RES.getRes('toast-bg_png')
        SceneManager.instance.mainScene.addChild(img)
        img.x = SceneManager.instance.mainScene.width/2 - img.width/2
        img.y = 500
        img.height = 40

        let label:egret.TextField = new egret.TextField()
        label.text=text
        label.size=20
        SceneManager.instance.mainScene.addChild(label)
        label.x = SceneManager.instance.mainScene.width/2 - label.width/2
        label.y = 510
        label.height = 40

        let timer: egret.Timer = new egret.Timer(1000, 1)
        timer.start()
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, (e) => {
            SceneManager.instance.mainScene.removeChild(label)
            SceneManager.instance.mainScene.removeChild(img)
        }, this)

    }

    private removeOther(scene) {
        let arr = [this.playerScene, this.heroScene, this.goodsScene, this.aboutScene]
        arr.forEach((item)=> {
            if (scene === item)return
            if (item.parent) {
                this.mainScene.removeChild(item)       
            }
        })
    }

    








}