// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'angular-preload-image', 'ngStorage', 'ngCordova']);

app.run(function($ionicPlatform, $http) {
  $ionicPlatform.ready(function() {
    // Set default of first time user to true
    // $localStorage.$default({
    //   first_time: true
    // });
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // StatusBar.styleDefault();
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "templates/main.html",
      controller: "mainCtrl",
    });

  $httpProvider.useApplyAsync(true);

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
