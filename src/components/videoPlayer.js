angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      'video': '<'
    },
    controller: function () {
      this.video = window.exampleVideoData[0];
      //this.videoUrl ="https://www.youtube.com/embed/" + this.video.id.videoId 

    },

    templateUrl: 'src/templates/videoPlayer.html'
  });

