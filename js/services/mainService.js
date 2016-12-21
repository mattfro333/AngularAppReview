angular.module('reviewApp').service('mainService', function($http){
  this.getCharacters = function(page){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/?page=' + page
})

  }

  this.images = [
    {name: 'luke', photo:"https://i.ytimg.com/vi/jAsnjfQer2Y/hqdefault.jpg"},{name: 'c-3po', photo: 'http://vignette4.wikia.nocookie.net/starwars/images/5/51/C-3PO_EP3.png/revision/latest/scale-to-width-down/500?cb=20131005124036'},
    {name: 'r2-d2', photo:"http://www.theoldrobots.com/images6/r2d2a5.JPG"}
  ]
})
