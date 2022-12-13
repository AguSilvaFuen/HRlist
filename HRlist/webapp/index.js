sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({

		name: "HRlist",
		settings: {
			id: "listaHR"
		},

	async: true
	})
	.placeAt("content");

});