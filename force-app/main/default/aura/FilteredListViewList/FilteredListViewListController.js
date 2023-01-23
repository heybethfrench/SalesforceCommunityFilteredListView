/**
 * @description       : List View component for the filtered language list views for the community ADO Item 11428
 * @author            : beth.french@mii.com
 * @group             :
 * @last modified on  : 01-19-23
 * @last modified by  :	beth.french@mii.com
 * Modifications Log
 * Ver   Date         Author                Modification
 * 1.0   01-19-23   beth.french@mii.com   Initial Version
 **/

({	
    init : function (component, event, helper){
        //setting selected list view on render
		cmp.set("v.selectedListView", cmp.get("v.selectedListView"));        
       
    },
    
    handleReset: function(cmp, event, helper) {
        //resetting the selected value to rerender the listview component
        var listview = cmp.get("v.selectedListView");
         
        cmp.set("v.selectedListView", listview);
                        
 	}

})