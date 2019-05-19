var testApp = angular.module("testApp", []);

testApp.controller("testController", function($scope, $http) {
  $scope.home = "This is the homepage";

  //    Our GET request function
  $scope.getRequest = function() {
    console.log("I've been pressed!");
    $http.get("https://jsonplaceholder.typicode.com/comments?postId=1").then(
      function successCallback(response) {
        $scope.response = response;
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  };

  //    Our POST request function
  $scope.postRequest = function() {
    $http.post("https://jsonplaceholder.typicode.com/posts", data).then(
      function successCallback(response) {
        console.log("Successfully POST-ed data");
      },
      function errorCallback(response) {
        console.log("POST-ing of data failed");
      }
    );
  };
});
