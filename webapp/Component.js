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
				"_sap.ui.viewExtensions": {
					"z.ext.lrn.view.Main":{
						"extPointBeforeTable": {
							className: "sap.ui.core.Fragment",
							fragmentName: "z.ext.lrn.two.fragment.BeforeTableExt",
							type: "XML",
							id: "stableBeforeId"
						},
						"extPointAfterTable": {
							className: "sap.ui.core.Fragment",
							fragmentName: "z.ext.lrn.two.fragment.AfterTableExt",
							type: "XML",
							id: "stableAfterId"
						}
					}
				},
				"sap.ui.viewModifications":{
					"z.ext.lrn.view.Main": {
						"smtTable":{
							"visible": true
						},
						"myButton":{
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