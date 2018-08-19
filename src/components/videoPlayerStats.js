angular.module('video-player')
  .component('videoPlayerStats', {
    bindings: {
      'stats': '<'
    },
    controller: function () {
      // this.likeCount = this.stats;
      // this.viewCount = stats.viewCount;
    },
    templateUrl: 'src/templates/videoPlayerStats.html'
  });