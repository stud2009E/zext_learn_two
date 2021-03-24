sap.ui.define([
    "z/ext/lrn/controller/Main.controller"
], function (
    MainController
) {
    "use strict";

    return MainController.extend("z.ext.lrn.two.controller.MainReplace", {

        onInit : function () {
            MainController.prototype.onInit.apply(this, arguments);

            console.log("onInit REPLACE controller");
        },

        onBeforeRendering: function() { 
            console.log("onBeforeRendering REPLACE controller");
        },

        onAfterRendering: function() { 
            console.log("onAfterRendering REPLACE controller");
        },

        onExit: function() { 
            console.log("onExit REPLACE controller");
        },

        onMyEventHandler: function(oEvent) { 
            console.log("onMyEventHandler REPLACE controller");
        }

    });

}, true);