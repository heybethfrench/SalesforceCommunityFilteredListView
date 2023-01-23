

({
    init: function (cmp, event, helper) {
        
        //setting the server-side action to the getObjectListViews method
        var action = cmp.get("c.getObjectListViews");
        
        //setting the parameters that are passed into the apex method
        action.setParams({searchKey: cmp.get('v.listviewfilter'), sObjectType: cmp.get('v.sObjectType')});
        
        //calling the server side apex
        action.setCallback(this, function(response){
            var state = response.getState();
            
            //if it's successful, display options
            if(state == 'SUCCESS'){
                cmp.set('v.options', response.getReturnValue());
            }
          
        });

        $A.enqueueAction(action);
        
    },
    
    handleSelectionChange : function (cmp, event, helper) {
        
        //when a picklist value is selected, create a component event
        var compEvent = cmp.getEvent("componentEvent");
        
        //setting the parameter that is passed into the event
        compEvent.setParams({
            "listViewDevName" : cmp.get("v.selectedValue")
        });
        
        compEvent.fire();
    },
    
        handleOptionsChange : function (cmp, event, helper) {
			
			//when the options are initially set, or when they change, get the options variable            
            var options = cmp.get("v.options");
            
            if(options.length>0){
                console.log('options exist');
                            //set the selectedValue to the first list view in the options lost
            cmp.set('v.selectedValue', options[0].value);
            
            //create a component event to let the list view component know that there is a selection
            var compEvent = cmp.getEvent("componentEvent");
            
            //setting the event parameter to the first list view
        	compEvent.setParams({
            	"listViewDevName" : options[0].value
        	});
            
        compEvent.fire();
            
            }else{
                
                var errorMessage = 'There are no list views available for selection, please contact your administrator';
                console.log('options do not');
                cmp.set("v.error", errorMessage);
            }


    }                           
})