angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      'video': '<',
      'stats': '<'
    },
    controller: function () {
    },

    templateUrl: 'src/templates/videoPlayer.html'
  });

