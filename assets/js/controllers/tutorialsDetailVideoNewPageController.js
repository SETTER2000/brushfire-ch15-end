angular.module('brushfire').controller('tutorialsDetailVideoNewPageController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

  // set-up loading state
  $scope.tutorialsDetailVideoNew = {
    iframeHide: true,
    loading: false
  };

$scope.me = window.SAILS_LOCALS.me;

$scope.previewYoutubeURL = function() {
  console.log('made it here');
  $scope.tutorialsDetailVideoNew.iframeHide = false;
};

  
}]);