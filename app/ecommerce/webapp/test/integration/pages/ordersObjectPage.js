sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ecommerce',
            componentId: 'ordersObjectPage',
            contextPath: '/customer/cust_to_order'
        },
        CustomPageDefinitions
    );
});