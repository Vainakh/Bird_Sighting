const app = angular.module('BirdsApp', []);

app.controller("MainController", ['$http', function($http){


  this.createHoliday = () => {
    this.h5 = "Birdies!!!"
    this.createForm = {};
    this.birds = [];
    this.bird = {};

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
      this.birds = response.data
      // console.log(this.holidays)
    }, error => {
      console.log(error)
    })
  }


  this.getBirds();
}])