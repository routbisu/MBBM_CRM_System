mbbmApp.service('brandService', brandService);

var brandService = function($http) {
    this.GetAllBrands = function() {
        $http.get(mbbmApi + "/api/brands/")
        .then(function(res) {
            return res.data;
        }, function(err) {
            console.log(err);
        });
    };
}