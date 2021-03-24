sap.ui.controller("z.ext.lrn.two.controller.Extension1", {

    onInit : function () {
        console.log("onInit Extension1 controller");
    },


    onBeforeRendering: function() { 
        console.log("onBeforeRendering Extension1 controller");
    },

    onAfterRendering: function() { 
        console.log("onAfterRendering Extension1 controller");
    },

    onExit: function() { 
        console.log("onExit Extension1 controller");
    },

    onMyEventHandler: function(oEvent) { 
        console.log("onMyEventHandler Extension1 controller");
    }

});