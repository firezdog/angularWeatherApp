describe('weatherCtrl', function(){
    beforeEach(module('weatherApp'));

    var $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$window_){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('$scope', function(){
        it('has a city variable', function(){
            var $scope = $rootScope.$new();
            var controller = $controller('weatherCtrl', {$scope: $scope});
            expect($scope.city).toBeDefined;
        });
        it('has a country variable', function(){
            var $scope = $rootScope.$new();
            var controller = $controller('weatherCtrl', { $scope: $scope });
            expect($scope.country).toBeDefined;
        });
        it('has a forecasts variable',function(){
            var $scope = $rootScope.$new();
            var controller = $controller('weatherCtrl as wc',{$scope: $scope});
            expect($scope.forecasts.length).toBeDefined;
        })
    });

});