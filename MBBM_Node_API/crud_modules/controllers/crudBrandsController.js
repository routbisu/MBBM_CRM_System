import CRUDBaseController from './crudBaseController';
import { Brand } from '../../mongoose_models/brand';

class CRUDBrandsController extends CRUDBaseController {
    constructor() {
        super(Brand, '_id');
    }
}

export { CRUDBrandsController };