(function(){
    'use strict';
    angular.module('VideoApp').filter('webm',['$log',function($log){
        return function (input) {
            var ans;
            if(input != "undefined" && input != undefined && input != null && input !=""){
                if(input.split('.webm') != undefined || input.split('.webm') != "undefined" || input.split('.webm') != null){
                    ans = input;
                }else{
                    ans = input.split('.mp4')[0]+'.webm';
                }

            }else{
                if(input == "undefined" || input == undefined){
                    ans = undefined;
                }else if(input == ""){
                    ans = "";
                }
            }
            return ans;
        }
    }]);
})()