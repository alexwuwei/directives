require(__dirname + '/../../bower_components/angular/angular.js');
require(__dirname + '/../css/normalize.css');
require(__dirname + '/../css/main.css');
require(__dirname + '/../css/animate.css');
// require(__dirname + '/profile/profile-module.js');
// require(__dirname + '/profile/profile.js');
// require(__dirname + '/repos/repos-module.js');
// require(__dirname + '/repos/repos.js');

(function() {
  angular.module('directives-app', [])
  .directive('customNav', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/navbar.html'
    };
  })
  .directive('customFooter', function() {
    return {
      restrict: 'E',
      templateUrl: './templates/footer.html'
    };
  })
  .directive('customHeading', function() {
    return {
      restrict: 'A',
      templateUrl: './templates/heading.html'
    };
  })
  .directive('customList', function() {
    return {
      restrict: 'A',
      templateUrl: './templates/list.html'
    }
  })

})();
