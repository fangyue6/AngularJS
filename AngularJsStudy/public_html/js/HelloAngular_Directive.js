var myModule = angular.module("MyModule",[]);
//指令
myModule.directive('hello',function(){
    return {
        restrict:'E',
        template:'<div>Hi everyOne!</div>',
        replace:true
    }
})