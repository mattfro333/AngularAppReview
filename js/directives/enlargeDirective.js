angular.module('reviewApp').directive('enlargeDirective', function(){
  return {
restrict: 'A',
link: function(scope, element, attrs){
  element.on('click', function(){
    var big = false;
    if(big){
    element.css('font-size', '50px')
  } else {
    element.css('font-size', '50px')

  }
})
    }
  }
})
