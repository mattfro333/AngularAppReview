angular.module('reviewApp').controller('charactersCtrl', function($scope,mainService){
$scope.page = 1
$scope.next = function(){
 if($scope.page < 9){
  $scope.page++;
  $scope.getCharacters();
}
}

$scope.showPhoto = function(p){
  var theName = p.name.split(' ')[0].toLowerCase();
   for(var i = 0; i < mainService.images.length; i++){
   if(theName === mainService.images[i].name){
     $scope.img = mainService.images[i].photo;
    
   }
 }
   }

$scope.back = function(){
  if  ($scope.page===1) {
  }else{
    $scope.page--;
    $scope.getCharacters();
  }
}
$scope.getCharacters = function(){
  mainService.getCharacters($scope.page).then(function(response){

$scope.people= response.data.results;
  })
}
$scope.getCharacters()
});
