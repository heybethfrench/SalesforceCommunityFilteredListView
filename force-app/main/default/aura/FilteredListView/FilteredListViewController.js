
({
	init : function(cmp, event, helper) {
        //sets render to true on initialization
        cmp.set('v.render', true);
        
	},
    
    handleComponentEvent : function(cmp, evt, helper){
        //sets render to false while handling the component event is handled
        cmp.set('v.render', false);
        
        //handling the event from the picklist value that contains the developer name of the list view
        var valueFromEvent = evt.getParam("listViewDevName");
        
        //setting the selectedValue to the developer name of the list view
        cmp.set("v.selectedValue", valueFromEvent);
        
        //setting render to true
        cmp.set('v.render', true);
    }
})