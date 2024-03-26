using { e_commerce } from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity customer as projection on e_commerce.customer;
    entity orders as projection on e_commerce.orders;
    entity products as projection on e_commerce.product;
}