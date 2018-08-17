angular.module('video-player')

  .component('app', {
    controller: function () {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.playThisVideo = function (video) {
        this.currentVideo = video;
      }.bind(this);

      this.updateVideos = function (videos) {
        console.log('inside play this video of app module', videos);
        this.videos = videos;
      }.bind(this);
    },

    templateUrl: 'src/templates/app.html'
  });
