sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onClickAction: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});