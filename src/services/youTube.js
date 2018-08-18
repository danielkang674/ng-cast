angular.module('video-player')
  .service('youTube', function ($http) {
    // TODO
    this.querySearch = function (userQuery) {
      return $http({
        url: 'https://www.googleapis.com/youtube/v3/search?',
        method: "GET",
        params: {
          q: userQuery,
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
          part: 'snippet'
        }
      })
        .then(function (response) {
          console.log(response.items);
          this.updateVideos(response.items);
        }, function (error) {
          console.error(error);
        });
    }.bind(this);
  });
