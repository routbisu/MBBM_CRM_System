import CRUDBaseController from './crudBaseController';
import { Brand } from '../../mongoose_models/brand';
import { Product } from '../../mongoose_models/product';

class CRUDProductsController extends CRUDBaseController {
    constructor() {
        super(Product, '_id', Brand);
    }
}

export { CRUDProductsController };