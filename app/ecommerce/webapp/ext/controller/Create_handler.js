sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
    var dialogbox;
    return {
        Create_method: function(oEvent) {
            // MessageToast.show("Custom handler invoked.");
            debugger;
            this.loadFragment({
                // id: "Create",
                name: "ecommerce.ext.fragment.Create",
            }
        ).then(function (oDialog) {
            oDialog.open();
            dialogbox = oDialog;
        })
        },   
        create_save:function(oEvent)
        {   debugger;
            // var Id = oEvent.oSource.oParent.aAriaOwns.length;
            var id = oEvent.oSource.oParent.mAggregations.content[1].mProperties.value;
            var name = oEvent.oSource.oParent.mAggregations.content[3].mProperties.value;
            var address  = oEvent.oSource.oParent.mAggregations.content[5].mProperties.value;
            var phone = oEvent.oSource.oParent.mAggregations.content[7].mProperties.value;
            // var id = Id.toString();

            if(id == '')
            {
                sap.m.MessageToast.show("Enter id");
                return;
            }
            if (name == '')
            {
                sap.m.MessageToast.show("Enter name");
                return;
            }
            if (phone == '')
            {
                sap.m.MessageToast.show("Enter phone number");
                return;
            }
            if(address == '')
            {
                sap.m.MessageToast.show("Enter address");
                return;
            }

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

            $.ajax(
                {
                    url : '/odata/v4/my/customer',
                    type : 'POST',
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
        create_close: function(oEvent)
        {
            debugger;
            dialogbox.close();
            dialogbox.destroy();
        }
    

    };
});
