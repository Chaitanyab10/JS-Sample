UserStroyApp.controller("UserStoryCtrl", UserStoryController);

UserStoryController.$inject = ["userStoryService","DTOptionsBuilder", "DTColumnDefBuilder"];

function UserStoryController(userStoryService, DTOptionsBuilder, DTColumnDefBuilder) {
    vm = this;
    vm.posts = [];

    vm.getPosts = function () {
        console.log("Calling Get Posts");
        $('#pre_loader').modal("show");
        vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10);
        vm.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1),
            DTColumnDefBuilder.newColumnDef(2), DTColumnDefBuilder.newColumnDef(3),
            DTColumnDefBuilder.newColumnDef(4).notSortable()
        ];

        userStoryService.getPosts().then(function (successResponse) {
            console.log(successResponse);
            vm.posts = successResponse.data;
            
            $('#pre_loader').modal("hide");
        }, function (errorResponse) {
            console.erro("Error: ", errorResponse);
            vm.posts = [];
            $('#pre_loader').modal("hide");
        });
        console.log("over getposts");
        
    }
vm.view = function(data){
            vm.fullDetails = angular.copy(data);
            $('#viewModal').modal("show");
        };
    vm.getPosts();    
}