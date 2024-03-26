sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ecommerce/test/integration/FirstJourney',
		'ecommerce/test/integration/pages/customerList',
		'ecommerce/test/integration/pages/customerObjectPage',
		'ecommerce/test/integration/pages/ordersObjectPage'
    ],
    function(JourneyRunner, opaJourney, customerList, customerObjectPage, ordersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ecommerce') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecustomerList: customerList,
					onThecustomerObjectPage: customerObjectPage,
					onTheordersObjectPage: ordersObjectPage
                }
            },
            opaJourney.run
        );
    }
);