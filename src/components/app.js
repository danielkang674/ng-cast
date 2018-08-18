angular.module('video-player')
  .component('app', {
    controller: ['youTube', function (youTube) {

      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.playThisVideo = function (video) {
        this.currentVideo = video;
      }.bind(this);

      this.updateCollection = function(data) {
        this.videos = data;
        this.currentVideo = this.videos[0];
      }.bind(this);

      this.updateVideos = function (query) {
  
        youTube.querySearch(query, this.updateCollection); 
        
      }.bind(this);
      
    }],

    templateUrl: 'src/templates/app.html'
  });
