const app = angular.module('BirdsApp', []);

app.controller("MainController", ['$http', '$scope', function($http, $scope){

  $scope.form = {
    type: $scope.type,
    origin: $scope.origin,
    image: $scope.image
  }

  this.editBird = (id) => {
    console.log('this is id:', id)
    $http({
      method: 'PUT',
      url: '/birds/' + id,
      data: {
        type: this.updatedType,
        origin: this.updatedOrigin,
        image: this.updatedImage
      }
    }).then(response => {
      this.updatedType = ''
      this.updatedOrigin = ''
      this.updatedImage = ''
      this.getBirds();
    })
  }

  this.deleteBird = (id) => {
    $http({
      method: 'DELETE',
      url: '/birds/' + id
    }).then (response => {
      console.log(response.data)
      const removeByIndex = this.birds.findIndex(bird => bird._id === id)
      this.birds.splice(removeByIndex, 1)
    })
  }

  this.createBird = () => {
    this.h5 = "Birdies!!!"
    this.createForm = {};
    this.birds = [];
    this.bird = {};

    console.log($scope.form);

    $http({
      method: 'POST',
      url: '/birds',
      data: $scope.form
    }).then(response => {
      // this.birds.unshift(response.data);
      // console.log(response);
      // this.createForm = {};//empties form field
      this.getBirds();
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
