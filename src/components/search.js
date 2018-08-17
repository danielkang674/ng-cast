angular.module('video-player')

  .component('search', {
    // TODO
    bindings: {
      'updateVideos': '<'
    },
    controller: function () {
      this.querySearch = function (userQuery) {
        $http({
          url: something,
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
      };
    },
    templateUrl: 'src/templates/search.html'
  });
