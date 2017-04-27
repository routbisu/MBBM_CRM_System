/**
 * Returns a function that will write the result as a JSON to the response
 */

function ok(res) {
    return (data) => {
        res.json(data);
    };
}

/**
 * Depending on the error type, will perform the following..
 * 
 * Object was not found - 404 Not found
 * Invalid or missing input parameter - 400 Bad Request
 * Not enough privileges - 401 Unauthorized
 * Unknown error - 500 Internal Server Error
 */

function fail(res) {
    return (error) => {
        console.log(error);
        res.sendStatus(404).end();
    };
}

export { ok, fail };