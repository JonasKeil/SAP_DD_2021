sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("calculatorproject.controller.View1", {
			onInit: function () {

            },
            onPlusPress: function () {
                var oOperationLabel = this.byId("operation");

                oOperationLabel.setText("+");            
            },
            onMinusPress: function () {
                var oOperationLabel = this.byId("operation");

                oOperationLabel.setText("-");            
            },
            onMultPress: function () {
                var oOperationLabel = this.byId("operation");

                oOperationLabel.setText("x");            
            },
            onDivPress: function () {
                var oOperationLabel = this.byId("operation");

                oOperationLabel.setText("÷");            
            },
            onClearPress: function () {
                this.byId("input0").setValue("");
                this.byId("input1").setValue("");
                this.byId("result").setText(0);
            },
            onEqualsPress: function () {
                var oOperationLabel = this.byId("operation");
                var oResultLabel = this.byId("result");
                var iInput0 = this.parseValue("input0", this);
                var iInput1 = this.parseValue("input1", this);
                

                switch(oOperationLabel.getText()) {
                    case "+":
                        oResultLabel.setText(iInput0 + iInput1);
                        break;
                    case "-":
                        oResultLabel.setText(iInput0 - iInput1);
                        break;
                    case "x":
                        oResultLabel.setText(iInput0 * iInput1);
                        break;
                    case "÷":
                        oResultLabel.setText(iInput0 / iInput1);
                        break;
                }  
            }, 
            parseValue: function(id, oContext) {
                var sInput = oContext.byId(id).getValue();  

                if (!sInput) {
                    alert(id + " is empty");
                    return 0;                   
               }  
               var iInput = parseInt(sInput);
                              
               if (!iInput && iInput !== 0) {
                    alert(id + " cannot be a string"); 
               }

               return iInput;                       
               }
		});
	});
