class MainScene extends eui.Component implements  eui.UIComponent {

	public Group_mbtn:eui.Group
	public mbtnPlayer:eui.ToggleButton
	public mbtnHero:eui.ToggleButton
	public mbtnGoods:eui.ToggleButton
	public mbtnAbout:eui.ToggleButton
	public mbg_img: eui.Image


	public constructor() {
		super();
		// this.mbg_img.width = SceneManager.swidth
		// this.mbg_img.height = SceneManager.sheight
		// this.mbg_img.width = SceneManager.instance.width
		// this.mbg_img.height = SceneMan	ager.instance.height
		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated()
		this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;

		this.Group_mbtn.touchEnabled = true	


		this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
			if (e.target.numElements) {
				console.log('按到组对象上了。。。');
				return
			}
			let theBtn = <eui.ToggleButton>e.target
			
			
			if (theBtn.selected) {
				this.toggleBtn(theBtn)
			} else {
				theBtn.selected = true
			}

		}, this)

	}

	public toggleBtn(btn:eui.ToggleButton|number) {			
		console.log('切换')

		for (let i = 0; i < this.Group_mbtn.numChildren; i++) {
			let theBtn = <eui.ToggleButton>this.Group_mbtn.getChildAt(i)
			theBtn.selected = false
		}	

		if (btn===0) {
			console.log('返回');
			return
		}	
		
		btn = <eui.ToggleButton>btn
		btn.selected = true

		let index = this.Group_mbtn.getChildIndex(<eui.ToggleButton>btn)
		
		switch (index) {
			case 0:
				SceneManager.toPlayerScene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
			break
			case 1:
				SceneManager.toHeroScene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
			break
			case 2:
			break
			case 3:
			break
			default:
			break
		}


	}







	
}