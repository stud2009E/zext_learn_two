sap.ui.define([
    "z/ext/lrn/Component"
], function (
    Component
) {
	"use strict";

	return Component.extend("z.ext.lrn.two.Component", {

		metadata : {
			manifest : "json",

			customizing:{
				"sap.ui.viewModifications":{
					"z.ext.lrn.view.Main": {
						"smtTable":{
							"visible": true
						}
					}
				},
				"_sap.ui.controllerReplacements":{
					"z.ext.lrn.controller.Main": "z.ext.lrn.two.controller.MainReplace"
				},
				"_sap.ui.controllerExtensions":{
					"z.ext.lrn.controller.Main": {
						controllerName: "z.ext.lrn.two.controller.Extension1"
					}
				}
			}
		}

	});
});