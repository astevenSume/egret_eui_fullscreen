class HeroList_item extends eui.ItemRenderer {
    public ce_select: eui.CheckBox;

    public constructor(){
        super()
        this.skinName = 'resource/skins/skins_item/heroListItem.exml'       
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this)    
    }

    private onComplete(e) {
        this.ce_select.addEventListener(eui.UIEvent.CHANGE, (e) => {
            this.data.isSelected = this.ce_select.selected
        }, this)
    }

    protected dataChanged() {
        this.ce_select.selected = this.data.isSelected
    }



}