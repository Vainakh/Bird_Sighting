const app = angular.module('BirdsApp', []);

app.controller("MainController", ['$http', '$scope', function($http, $scope){
  
  let data = {
    name: $scope.name,
    origin: $scope.origin,
    image: $scope.image
  } 

  this.createBird = () => {
    this.h5 = "Birdies!!!"
    this.createForm = {};
    this.birds = [];
    this.bird = {};

    console.log(data);

    $http({
      method: 'POST',
      url: '/birds',
      data: this.createForm
    }).then(response => {
      this.birds.unshift(response.data);
      // console.log(response);
      this.createForm = {};//empties form field
    }, error => {
      console.log(error);
    })//closes our .then()
  }

  this.getBirds = () => {
    $http({
      method: 'GET',
      url: '/birds'
    }).then(response => {
      console.log(response)
      this.birds = response.data
     
    }, error => {
      console.log(error)
    })
  }


  this.getBirds();
}])