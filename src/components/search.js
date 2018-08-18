angular.module('video-player')

  .component('search', {
    bindings: {
      'updateVideos': '<',
      'querySearch': '<'
    },
    controller: function () {
      this.userQuery = '';
    },
    templateUrl: 'src/templates/search.html'
  });
