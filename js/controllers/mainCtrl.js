app.controller('mainCtrl', function($scope, $http, socket9, $localStorage, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate, $cordovaSocialSharing) {
  // 4
  $scope.$storage = $localStorage.$default({
    data : [{
      symptom : 'Cough',
      count   : 0,
      date    : []
    },{
      symptom : 'Headache',
      count   : 0,
      date    : []
    },{
      symptom : 'Sore Throat',
      count   : 0,
      date    : []
    },{
      symptom : 'Vomiting',
      count   : 0,
      date    : []
    }]
  });

  $scope.urls = [
    'img/cough.jpg',
    'img/headache.jpg',
    'img/soreThroat.jpg',
    'img/vomiting.jpg',
  ];

  $scope.inc = function(index) {
    console.log(index);
    $scope.$storage.data[index].count++;
    $scope.$storage.data[index].date.push(Date().toString());
  };


  $scope.showDetail = function(index) {
    $scope.showModal('templates/detail.html');
    $scope.activeItem = index;
  };

  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope,
      animation: 'slide-in-up',
      backdropClickToClose: true,
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove();
  };

});
