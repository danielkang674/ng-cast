angular.module('video-player')
  .service('youTubeStats', function($http) {
    this.statsSearch = function (id, cb) {
      return $http({
        url: 'https://www.googleapis.com/youtube/v3/videos',
        method: 'GET',
        params: {
          key: window.YOUTUBE_API_KEY,
          id: id,
          part: 'statistics'
        }
      })
        .then(function(data) {
          return cb(data);
        }, function(error) {
          console.log(error);
        });
    }.bind(this);
  });