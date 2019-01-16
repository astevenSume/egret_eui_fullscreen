class HeroScene extends eui.Component implements  eui.UIComponent {

	public btn_return: eui.Button
	public btn_select: eui.Button
	public scr_hero: eui.Scroller
	public scr_list: eui.List

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

		let dataArr:any[] = [
			{image: 'resource/art/heros_goods/heros01.png', name: 'a亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false}, 
			{image: 'resource/art/heros_goods/heros02.png', name: 'b亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false},			
			{image: 'resource/art/heros_goods/heros03.png', name: 'c亚', value: '评价: 很特么厉害, 为所欲为', isSelected: true},			
			{image: 'resource/art/heros_goods/heros04.png', name: 'd亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false},			
			{image: 'resource/art/heros_goods/heros05.png', name: 'e亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false},			
			{image: 'resource/art/heros_goods/heros06.png', name: 'f亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false},			
			{image: 'resource/art/heros_goods/heros07.png', name: 'g亚', value: '评价: 很特么厉害, 为所欲为', isSelected: false} 
		]
		let EUIARR: eui.ArrayCollection = new eui.ArrayCollection(dataArr)
		this.scr_list.dataProvider = EUIARR
		this.scr_list.itemRenderer = HeroList_item

		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, (event) => {
			SceneManager.toMainScene()
			SceneManager.instance.mainScene.toggleBtn(0)
		}, this)

		this.btn_select.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickSelect, this)
	}
	private clickSelect() {
		SceneManager.toMainScene()
		SceneManager.instance.mainScene.toggleBtn(0)

		let dataProvider = this.scr_list.dataProvider
		let arr:string[] = []

		for (let i = 0; i< dataProvider.length; i++) {
			let item = dataProvider.getItemAt(i)
			if (item.isSelected) {
				arr.push(item.name)
			}
		}
		
		SceneManager.showInfo(arr)
	}



	
}