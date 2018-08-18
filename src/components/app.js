angular.module('video-player')
  .component('app', {
    controller: ['youTube', 'youTubeStats', function (youTube, youTubeStats) {

      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.stats = {};

      this.playThisVideo = function (video) {
        this.currentVideo = video;
      }.bind(this);

      this.updateCollection = function (data) {
        this.videos = data;
        this.currentVideo = this.videos[0];
        youTubeStats.statsSearch(this.currentVideo.id.videoId, this.updateStats);
      }.bind(this);

      this.updateVideos = function (query) {
        youTube.querySearch(query, this.updateCollection);
      }.bind(this);

      this.reallyUpdateStats = function (stats) {
        this.stats = stats;
        console.log(this.stats);
      }.bind(this);


      this.updateStats = function (statsData) {
        this.reallyUpdateStats(statsData.data.items[0].statistics);
      }.bind(this);

    }],

    templateUrl: 'src/templates/app.html'
  });
