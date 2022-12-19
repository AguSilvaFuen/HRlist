sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

        return Controller.extend("projectlist.controller.EmployeeList", {
            onInit: function () {
            },
/*
            onFilterInvoices : function (oEvent) {
              
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter("Ename", FilterOperator.Contains, sQuery));
                }
                var oList = this.byId("invoiceList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);

var oddIdBinding = this.getView().byId('invoiceList').getBinding('items');
var oddIdFilter = new sap.ui.model.Filter({path: 'employeeSet>Ename'});          
oddIdBinding.filter(oddIdFilter);

            },
            _search: function(oEvent, oList, sFilterProperty) {
                var sQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue"),
                    aFilter = [];
    
                if (sQuery && sQuery.length > 0) {
                    aFilter.push(new Filter(sFilterProperty, FilterOperator.Contains, sQuery));
                    // case insensitive search currently does not work locally!
                    //aFilter.push(new Filter("tolower(" + sFilterProperty + ")", FilterOperator.Contains, "'" + sQuery.toLowerCase() + "'"));
                }
    
                oList.getBinding("items").filter(aFilter, "invoiceList");
            },
    
            _selectEntityType: function(sEntityType, oList, bBind) {
                if (!oList) {
                    return;
                }
    
                var aItems = oList.getItems();
    
                // find corresponding item(s)
                var aTarget = jQuery.grep(aItems, function(oItem) {
                    return oItem.getTitle() === sEntityType;
                });
    
                if (aTarget.length > 0) {
                    var oItem = aTarget[0];
    
                    // select first list item
                    oList.setSelectedItem(oItem, true);
    
                    // set binding 
                    if (bBind) {
                        this._bindPanel(oItem.getBindingContext("ui").getPath());
                    }
                }
            },

*/            
            onPress : function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("detail");
            }
        });
    });
