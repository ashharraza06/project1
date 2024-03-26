sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        submit: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
