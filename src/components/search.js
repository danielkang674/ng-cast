angular.module('video-player')

  .component('search', {
    bindings: {
      'result': '<',
      'search': '<',
      'dSearch': '<'
    },
    // controller: ['youTube', function (youTube) {
    //   this.search = function (userQuery, cb) {
    //     youTube.search(userQuery, cb)
    //   }.bind(this);
    // }],
    templateUrl: 'src/templates/search.html'
  });
