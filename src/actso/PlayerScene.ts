class PlayerScene extends eui.Component implements  eui.UIComponent {

	public btn_return:eui.Button
	public btn_zhuangbei:eui.Button
	public btn_qianghua:eui.Button
	public scr_zhuangbei:eui.Scroller
	public list_zhuangbei:eui.List

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;

		let dataArr:any[] = [
			{image:"resource/art/profile/skillIcon01.png", name:"旋龙幻杀"},
			{image:"resource/art/profile/skillIcon02.png", name:"天魔咒"},
			{image:"resource/art/profile/skillIcon03.png", name:"望见展"},
			{image:"resource/art/profile/skillIcon04.png", name:"情迷水"},
			{image:"resource/art/profile/skillIcon05.png", name:"真龙霸天"},
			{image:"resource/art/profile/skillIcon06.png", name:"虎嗖"},
			{image:"resource/art/profile/skillIcon07.png", name:"来吧！"}
		]

		let EUIARR: eui.ArrayCollection = new eui.ArrayCollection(dataArr)
		this.list_zhuangbei.dataProvider = EUIARR
		this.scr_zhuangbei.horizontalScrollBar.autoVisibility = false

		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this)

	}

	private returnMain() {		
		SceneManager.toMainScene()
		SceneManager.instance.mainScene.toggleBtn(0)
	}
	

}