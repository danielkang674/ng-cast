angular.module('video-player')
  .service('youTube', function ($http) {
    // TODO
    this.search = function (userQuery, cb) {
      return $http({
        url: 'https://www.googleapis.com/youtube/v3/search?',
        method: 'GET',
        params: {
          q: userQuery,
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
          part: 'snippet',
          type: 'video'
        }
      })
        .then(function (response) {
          cb(response.data.items);
        }, function (error) {
          console.error(error);
        });
    }.bind(this);
  });
