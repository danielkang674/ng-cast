angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      'video': '<',
      'stats': '<'
    },
    controller: function () {
      this.video = window.exampleVideoData[0];
    },

    templateUrl: 'src/templates/videoPlayer.html'
  });

