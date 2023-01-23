

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