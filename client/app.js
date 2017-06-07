/**
 * app.js
 * backbone of the frontend
 * configuration,routing
 *
 * */

(function(){

  'use strict';

    /**
     * using ui.router for routing
     * angular-loading-bar for showing the loading progress on the top
     * com.2fdevs.videogular for the video rendering
     * infinte-scroll to implement the auto loading of the vidoes
     * while using the verticle scroll
      * @type {*}
     */


  var app = angular.module('VideoApp',[
      'ui.router',
      'angular-md5',
      'angular-loading-bar',
      'ngSanitize',
      'com.2fdevs.videogular',
      'infinite-scroll']
  );

  /**
   * app configuration
   * */
    app.config([
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider',
        'cfpLoadingBarProvider',function($locationProvider,$stateProvider,$urlRouterProvider,cfpLoadingBarProvider){

      /**
       * Uncomment the following to show spinner
       * cfpLoadingBarProvider.includeSpinner = true
       * */
      cfpLoadingBarProvider.includeSpinner = false;


      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      var userInfo;


      /**
       * $q : object for service that helps you run functions asynchronously,
       * and use their return values (or exceptions) when they are done processing.
       *
       * LoginService to provide login
       *
       * */
      var loginRequired = ['$q','LoginService',function($q,LoginService) {
           userInfo = LoginService.getUserInfo();
          if(userInfo){
            return $q.when(userInfo);
          }else{
            return $q.reject({authenticated:false});
          }
      }];

        $stateProvider
        .state('/',{
          url:'/login',
          templateUrl:'/components/login/LoginView.html'
        })
        .state('/dashboard',{
          url:'/dashboard?sessionId',
          templateUrl:'/components/dashboard/DashboardView.html',
            controller:'DashboardController as dashboardCtrl',
          resolve:{loginRequired:loginRequired}
        })
        .state('/videoview',{
          url:'/videoview?videoId?sessionId',
            controller:'VideoController',
            views:{
              'video':{
                  templateUrl:'/components/video/VideoView.html',
                  resolve:{loginRequired:loginRequired}
              }
            }
        });

        $urlRouterProvider.otherwise('/login');

    }]);



    app.run(['$rootScope','$location','$window',
      function($rootScope,$location){
        $rootScope.$on("$routeChangeSuccess",function(userInfo){
          // console.log(userInfo);
        });

        $rootScope.$on("$routeChangeError",function(event,curr,pre,eventObj){
          if(eventObj.authenticated === false){
            $location.path('/login');
          }
        })
      }
    ])

})();
