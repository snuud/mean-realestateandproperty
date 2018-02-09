angular.module('app').factory('dataFactory', dataFactory);

function dataFactory($http){

    return {
        findAllProperties: findAllProperties,
        findPropertyById: findPropertyById,
        addNewProperty: addNewProperty,
        removePropertyById: removePropertyById,
        findAllUsers: findAllUsers,
        addNewUser: addNewUser,
        removeUserById: removeUserById
    };

    function findAllProperties(){
        return $http.get('api/property').then(complete).catch(failed);
    };

    function findPropertyById(id){
        return $http.get('api/property/' + id).then(complete).catch(failed);
    };

    function addNewProperty(data){
        return $http.post('/api/property', data).then(complete).catch(failed);
    };

    function removePropertyById(id){
        return $http.delete('/api/property/' + id).then(complete).catch(failed);
    };

    function findAllUsers(){
        return $http.get('api/user').then(complete).catch(failed);
    };

    function addNewUser(data){
        return $http.post('/api/user', data).then(complete).catch(failed);
    };

    function removeUserById(id){
        return $http.delete('/api/user/' + id).then(complete).catch(failed);
    };

    function complete(response){
        return response.data;
    };

    function failed(error){
        return error.errorText
    };

}