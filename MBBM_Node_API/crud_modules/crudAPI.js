import { Router } from 'express';
import { CRUDBrandsController } from './controllers/crudBrandsController';
import { CRUDProductsController } from './controllers/crudProductsController';

export default function() {
	var crudAPI = Router();
	
	crudAPI.use('/brands', new CRUDBrandsController().route());
	crudAPI.use('/products', new CRUDProductsController().route());
	
	return crudAPI;
}