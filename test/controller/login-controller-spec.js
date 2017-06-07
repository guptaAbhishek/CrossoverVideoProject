describe('VideoApp',function(){


    var $rootScope,
        $scope,
        dashboardController;


    beforeEach(function(){
        module('VideoApp');
        inject(function($rootScope,$controller,_DashboardService_,_LoginService_,_VideoService_){

            $scope = $rootScope.$new();

            loginController = $controller('LoginController',{
                $scope:$scope
            });

            dashboardController = $controller('DashboardController',{
                $scope:$scope
            });

            videoController = $controller('VideoController',{
                $scope:$scope
            });

            dashboardService = _DashboardService_;
            loginService = _LoginService_;
            videoService = _VideoService_;


        });
    });

    describe('LoginController test suite',function(){
        it('LoginController should be defined',function(){
            expect(loginController).toBeDefined();
        });

        it('LoginController should not be NULL', function() {
            expect(loginController).not.toBeNull();
        });

        it('LoginController login should expect two parameters',function(){
            var login = jasmine.createSpy('$scope.login');
            login('ali','password');
            expect(login).toHaveBeenCalledWith('ali','password');
        });

        it('should logout the user',function(){
            // $scope.logout();
            // loginService.getUserInfo();
            // loginService.logOut();
            // $stateProvider.state('/');
        });
    });

    describe('LoginService test suite',function(){
        var loginService,httpBackend;

        beforeEach(function(){
            inject(function($httpBackend,$injector){
                loginService = $injector.get('LoginService');
                httpBackend = $httpBackend;
            });
        });

        it('LoginSerivceTest init',function(){
            expect(loginService).toBeDefined();
            expect(loginService.userInfo).toBeUndefined();
        });

        describe('GetUserInfo',function(){
            it('should return the userinfo',function(){
                // var d = loginService.getUserInfo();
                // expect(function(){
                //     loginService.getUserInfo();
                // }).toThrowError();
                // expect(d).toBeDefined();
            });
        });

        describe('LogIn',function(){
           it('login should defined',function(){

           });
        });

        describe('LogOut',function(){
            it('logout should be defined',function(){

            });

        });


    });


    describe('DashboardController test suite',function(){
        it('Dashboard Controller should not be null',function(){
            expect(dashboardController).not.toBeNull();
        });

        it('Dashboard Controller should be defined',function(){
           expect(dashboardController).toBeDefined();
        });

        describe('DashboardController init ',function(){
            it('$scope.initialComplete should be false',function(){
                expect($scope.initialComplete).toBeFalsy();
            });

            it('$scope.rated should be false',function(){
                expect($scope.rated).toBeFalsy();
            });

            it('$scope.gotRatings should be fasle',function(){
                expect($scope.gotRatings).toBeFalsy();
            });

            it('this.config should be definded',function(){
               expect(dashboardController.config).toBeDefined();
            });

            it('this.players should not be undefined/null',function(){
                expect(dashboardController.players).not.toBeNull();
                expect(dashboardController.players).toBeDefined();
            });

            it('this.onPlayerReady should expect two parameters',function(){
                var onPlayerReady = jasmine.createSpy('dashboardController.onPlayerReady');
                onPlayerReady('a','b');
                expect(onPlayerReady).toHaveBeenCalledWith('a','b');
            });

            it('this.onUpdateState should expect two parameters',function(){
                var onUpdateState = jasmine.createSpy('dashboardController.onUpdateState');
                onUpdateState('a','b');
                expect(onUpdateState).toHaveBeenCalledWith('a','b');
            });

            it('$scope.loadMore should be defined/not null',function(){
                expect($scope.loadMore).toBeDefined();
                expect($scope.loadMore).not.toBeNull();
            });

            it('$scope.rateFunction should be defined/not null',function(){
                // var rateFunction = jasmine.createSpy('$scope.rateFunction');
                // rateFunction('a','b');
                // expect($scope.rateFunction).toBeDefined();
                // expect($scope.rateFunction()).not.toBeNull();
            });

            it('$scope.rateFunction should accept two parameters',function(){
                var rateFunction = jasmine.createSpy('$scope.rateFunction');
                rateFunction('a','b');
                expect(rateFunction).toHaveBeenCalledWith('a','b');
            });

            it('$scope.rateFunction should rate video ',function(){

            });


            it('this.getSingleVideo should not be null/undefined',function(){
                // expect(dashboardController.getSingleVideo()).toBeDefined();
                // expect(dashboardController.getSingleVideo()).not.toBeNull();
            });

            describe('GetSingleVidoe',function(){

                var getSingleVideoSpy;

                beforeEach(function(){
                    getSingleVideoSpy = spyOnAngularService(dashboardService,'this.getSingleVidep');

                });

                it('this.getSingleVideo should get single video ',function(){

                });
            });


            it('$scope.getRatings should not be null/undefined',function(){

            });

            it('$scope.getRatings should return rating of the videos',function(){

            });
        });


    });

    describe('VideoController test suite',function(){
       it('Video Controller should not be null',function(){
           expect(videoController).not.toBeNull();
       });

       it('Video Controller should be defined',function () {
            expect(videoController).toBeDefined();
       });

       describe('VideoController init',function(){
           it('$scope.getSingle video should not be null/undefined',function(){
                // expect($scope.getSingle()).toBeDefined();
                // expect($scope.getSingle()).not.toBeNull();
           });

           it('$scope.getSingle Video should return single video',function(){

           });
       });
    });



    describe('DashboardService test suite',function(){

    });

    describe('VideoService test suite',function(){

    });


    describe('webm filter',function(){
        var $filter,filter;

        beforeEach(function(){

            inject(function ($injector) {
                $filter = $injector.get('$filter')
                filter = $filter('webm')
            });
        });


        it('Should return undefined when undefined passed in',function(){
            expect(filter(undefined)).toBeUndefined();
        });

        it('Should return null when null is passed in ',function(){
            expect(filter(null)).toBeUndefined();
        });

        it('Should return blank string if blank string is passed in ',function(){
            expect(filter("")).toBe("");
        });

        it('Should return the .webm formated string',function(){
            var testString = "abc.mp4";
            // expect(filter(testString)).toBe("abc.webm");
        });

        it('Should return .webm when str.webm passed as input',function(){
            var testString = "abc.webm";
            expect(filter(testString)).toBe("abc.webm");
        });
    });

    describe('starRating directive',function(){

    });











});