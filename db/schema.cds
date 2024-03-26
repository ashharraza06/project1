namespace e_commerce;

entity customer 
{
    key cust_id : String;
    cust_name : String;
    cust_ph : String; 
    cust_add : String;

    cust_to_order : Composition of many orders on cust_to_order.customer_id = cust_id;
}

entity orders 
{
    key order_id : Integer;
    order_date : Date;
    customer_id : Integer;
    product_id : Integer;
    order_to_customer : Association to one customer on order_to_customer.cust_id = customer_id;
    order_to_product : Association to many product on order_to_product.prod_id = product_id; 

}

entity product
{
    key prod_id : Integer;
    prod_price : Integer;
    prod_des : String;
    prod_to_order : Composition of many orders on prod_to_order.product_id = prod_id;
}


