import { Router } from 'express';
import { pluralize } from 'pluralize';
import { ok, fail } from "../utils";

const MAX_RESULTS = 100;

/**
 * Generic controller that provides CRUD operations for a given Mongoose model
 */
export default class CRUDBaseController {
    /**
     * @param model - Mongoose model
     * @param key - primary key of the model that will be used for searching, removing and reading
     */

    constructor(model, key, ...otherModels) {
        this.model = model;
        this.modelName = this.model.modelName.toLowerCase();
        this.key = key;

        if(otherModels instanceof Array && otherModels.length !== 0) {
            for(let i=0; i < otherModels.length; i++) {
                if(otherModels[i].modelName.toLowerCase() == "brand") {
                    this.brandModel = otherModels[i];
                }
            }
        }
    }

    create(data) {
        if(this.modelName == "product" && this.brandModel !== undefined) {
            var filter = {};
            filter[this.key] = data.BrandID;
            
            return this.brandModel
                .findOne(filter)
                .then((brand) => {
                    if(brand === null) {                       
                        return { "Error": "BrandID doesn't exist!" };
                    }
                    else {
                        return this.model
                            .create(data)
                            .then((modelInstance) => {
                                var response = {};
                                response[this.modelName] = modelInstance;
                                return response;
                            });
                    }
                });
        }
        else {
            return { "Error": "Something went wrong!" };
        }
    }

    read(id) {
        var filter = {};
        filter[this.key] = id;

        return this.model
            .findOne(filter)
            .then((modelInstance) => {
                var response = {};
                response[this.modelName] = modelInstance;
                return response;
            });
    }

    list() {
        return this.model
            .find({})
            .limit(MAX_RESULTS)
            .then((modelInstances) => {
                var response = {};
                // console.log("list() modelInstances: " + JSON.stringify(modelInstances));
                response[this.modelName + "s"] = modelInstances;
                return response;
            });
    }

    delete(id) {
        const filter = {};
        filter[this.key] = id;

        return this.model
            .remove(filter)
            .then(() => {
                return { "Success": "Document deleted successfully" };
            });
    }

    update(id, data) {
        var filter = {};
        filter[this.key] = id;

        return this.model
            .findOne(filter)
            .then((modelInstance) => {
                for (var attribute in data) {
                    if(data.hasOwnProperty(attribute) && attribute !== this.key && attribute !== "_id") {
                        modelInstance[attribute] = data[attribute];
                    }
                }

                return modelInstance.save();
            })
            .then((modelInstance) => {
                var response = {};
                response[this.modelName] = modelInstance;
                return response;
            });
    }

    route() {
        const router = new Router();

        router.get("/", (request, response) => {
            this
                .list()
                .then(ok(response))
                .then(null, fail(response));
        });

        router.post("/", (request, response) => {
            this
                .create(request.body)
                .then(ok(response))
                .then(null, fail(response));
        });

        router.get("/:key", (request, response) => {
            this
                .read(request.params.key)
                .then(ok(response))
                .then(null, fail(response));
        });

        router.put("/:key", (request, response) => {
            this
                .update(request.params.key, request.body)
                .then(ok(response))
                .then(null, fail(response));
        });

        router.delete("/:key", (request, response) => {
            this
                .delete(request.params.key)
                .then(ok(response))
                .then(null, fail(response));
        });

        return router;
    }
}
