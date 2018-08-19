angular.module('video-player')
  .component('app', {
    controller: ['youTube', 'youTubeStats', function (youTube, youTubeStats) {

      this.videos = null;
      this.currentVideo = null;
      this.stats = null;

      this.selectVideo = function (video) {
        this.currentVideo = video;
      }.bind(this);

      this.searchResults = function (data) {
        this.videos = data;
        this.currentVideo = this.videos[0];
        youTubeStats.statsSearch(this.currentVideo.id.videoId, this.updateStats);
      }.bind(this);

      this.reallyUpdateStats = function (stats) {
        this.stats = stats;
      }.bind(this);

      this.updateStats = function (statsData) {
        this.reallyUpdateStats(statsData.data.items[0].statistics);
      }.bind(this);

      this.search = function (userQuery, cb) {
        youTube.search(userQuery, cb);
      }.bind(this);

      this.dSearch = _.debounce(this.search, 500);

      youTube.search('dogs', this.searchResults);
    }],

    templateUrl: 'src/templates/app.html'
  });
