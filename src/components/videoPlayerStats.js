angular.module('video-player')
  .component('videoPlayerStats', {
    bindings: {
      'stats': '<'
    },
    controller: function () {
      // this.likeCount = this.stats;
      console.log(this.stats);
      // this.viewCount = stats.viewCount;
    },
    templateUrl: 'src/templates/videoPlayerStats.html'
  });