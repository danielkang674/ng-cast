angular.module('video-player')
  .component('videoList', {
    bindings: {
      'playThisVideo': '<',
      'videos': '<'
    },
    controller: function () {
      this.videos = window.exampleVideoData;
    },
    templateUrl: 'src/templates/videoList.html'
  }
  );
