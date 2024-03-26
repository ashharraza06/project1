using MyService as service from '../../srv/service';

annotate service.customer with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'cust_id',
            Value : cust_id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cust_name',
            Value : cust_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cust_ph',
            Value : cust_ph,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cust_add',
            Value : cust_add,
        },
    ]
);
annotate service.customer with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'cust_id',
                Value : cust_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cust_name',
                Value : cust_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cust_ph',
                Value : cust_ph,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cust_add',
                Value : cust_add,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
