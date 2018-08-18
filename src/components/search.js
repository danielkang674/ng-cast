angular.module('video-player')

  .component('search', {
    // TODO
    bindings: {
      'updateVideos': '<',
      'querySearch': '<'
    },
    controller: function () {
      this.userQuery = '';
      console.log(this, this.userQuery);
    },
    templateUrl: 'src/templates/search.html'
  });
