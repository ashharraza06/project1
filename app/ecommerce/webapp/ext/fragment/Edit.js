sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
    var dialogbox;
    return {
        onPress: function(oEvent) {
            // MessageToast.show("Custom handler invoked.");
            debugger;
            this.loadFragment({
                // id: "Create",
                name: "ecommerce.ext.fragment.Editbox",
            }
        ).then(function (oDialog) {
            var id = oEvent.oSource.oParent.mAggregations.cells[0].mProperties.text;
            var name = oEvent.oSource.oParent.mAggregations.cells[1].mProperties.text;
            var ph = oEvent.oSource.oParent.mAggregations.cells[2].mProperties.text;
            var add = oEvent.oSource.oParent.mAggregations.cells[3].mProperties.text;
            sap.ui.getCore().byId("Editxml").mAggregations.content[1].setValue(id);
            sap.ui.getCore().byId("Editxml").mAggregations.content[3].setValue(name);
            sap.ui.getCore().byId("Editxml").mAggregations.content[5].setValue(ph);
            sap.ui.getCore().byId("Editxml").mAggregations.content[7].setValue(add);

            sap.ui.getCore().byId("Editxml").mAggregations.content[1].setEnabled(false);

            oDialog.open();
            dialogbox = oDialog;
        });
        },
        saveedit : function(oEvent){

            debugger;

            var id = oEvent.oSource.oParent.mAggregations.content[1].mProperties.value;
            var name = oEvent.oSource.oParent.mAggregations.content[3].mProperties.value;
            var phone = oEvent.oSource.oParent.mAggregations.content[5].mProperties.value;
            var address = oEvent.oSource.oParent.mAggregations.content[7].mProperties.value;
            
            if (phone.length !== 10) {
                sap.m.MessageToast.show("Phone number should be 10 digits long.");
                // Keep the dialog open and return without further execution
                return;
            }

            // var ph1 = parseInt(phone);
            // var id1 = parseInt(id);

            let testdata = JSON.stringify(
                {
                    cust_id : id,
                    cust_name : name,
                    cust_ph : phone,
                    cust_add : address
                }
            );

            var url = '/odata/v4/my/customer/' + id;

            $.ajax(
                {
                    url : url,
                    type : 'PUT',
                    contentType : 'application/json',
                    data : testdata,
                    success : function(data){
                        debugger;
                        //Handle success
                        console.log(data);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        // Handle error
                        console.error(textStatus, errorThrown);
                    }
                }
            )
            if(dialogbox)
            {
                dialogbox.close();
                dialogbox.destroy();
            }
            else
            {
                console.log("Error Occured");
            }

            this.refresh();
        },
        canceledit : function(oEvent)
        {
            dialogbox.close();
            dialogbox.destroy();
        }
    };
});
