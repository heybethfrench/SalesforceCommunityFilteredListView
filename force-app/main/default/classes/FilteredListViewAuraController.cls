

public with sharing class FilteredListViewAuraController {

    @AuraEnabled(cacheable = true)
    public static List<listOption> getObjectListViews(String searchKey, String sObjectType) {
        
        //getting the custom metadata record that ties the language to the naming convention
        List_View_Filter__mdt lvFilter = List_View_Filter__mdt.getInstance(searchKey);
		
        //instantiating return variable
        List<listOption> listViewOptions = new List<listOption>();

        if(lvFilter != null){
            
            //creating a search term so we can use LIKE with a variable
            String searchTerm = lvFilter.Naming_Convention__c + '%';

            //querying all list views, creating a listOption for each
            //using a data wrapper and not the SelectOption object because SelectOption not supported with AuraEnabled methods
            for(ListView lv : [SELECT Id, DeveloperName, Name FROM ListView WHERE SobjectType = :sObjectType AND Name LIKE :searchTerm ]){

                //creating the listOption and removing the naming convention from the start of the label
                listViewOptions.add(new listOption(lv.DeveloperName, lv.Name.removeStart(lvFilter.Naming_Convention__c)));
            }

        }

        return listViewOptions;
        
    }

    //data wrapper and constructor for listOption class since SelectOption not supported with AuraEnabled
    public class listOption {
        @AuraEnabled public String value {get; set;}
        @AuraEnabled public String label {get; set;}
 
        public listOption(String devName, String name) {
            value = devName;
            label = name;
        } 
    }
}