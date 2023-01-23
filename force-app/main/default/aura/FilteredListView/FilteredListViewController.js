/**
 * @description       : Parent Component for the filtered language list views for the community ADO Item 11428
 * @author            : beth.french@mii.com
 * @group             :
 * @last modified on  : 01-19-23
 * @last modified by  :	beth.french@mii.com
 * Modifications Log
 * Ver   Date         Author                Modification
 * 1.0   01-19-23   beth.french@mii.com   Initial Version
 **/

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