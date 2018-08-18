angular.module('video-player')
  .component('app', {
    controller: ['youTube', function (youTube) {

      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.playThisVideo = function (video) {
        this.currentVideo = video;
      }.bind(this);

      this.updateVideos = function (videos) {
        console.log('inside play this video of app module', videos);
        this.videos = videos;
      }.bind(this);
      this.querySearch = youTube.querySearch;
      console.log(this);
    }],

    templateUrl: 'src/templates/app.html'
  });
