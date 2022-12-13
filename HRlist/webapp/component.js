sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog, Device) {
    'use strict';
    return UIComponent.extend("HRlist.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");

            this._helloDialog = new HelloDialog(this.getRootControl());

            this.getRouter().initialize();

        },
        getContentDensityClass : function () {
            if (!this._sContentDensityClass) {
                if (!Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        },

        exit: function () {
            this._helloDialog.destroy;
            delete this._helloDialog;
        },

        openHelloDialog: function(){
            this._helloDialog.open(); 
        }
    })
});