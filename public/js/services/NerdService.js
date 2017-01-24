// public/js/services/NerdService.js
angular.module('computerTrading').factory(function($http) {
'use strict';
    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/user');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(userData) {
            console.log('factory',userData);
            return $http.post('/api/user', userData);
            
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    }       

});