UserStroyApp.service("userStoryService", userStoryService);
userStoryService.$inject = ["$http"];

function userStoryService($http) {
    this.getPosts = function () {
        return $http.get("http://jsonplaceholder.typicode.com/posts");
    }
}