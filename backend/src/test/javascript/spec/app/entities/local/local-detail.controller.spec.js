'use strict';

describe('Controller Tests', function() {

    describe('Local Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockLocal, MockProfile, MockTipoLocal, MockFotos, MockComentarios;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockLocal = jasmine.createSpy('MockLocal');
            MockProfile = jasmine.createSpy('MockProfile');
            MockTipoLocal = jasmine.createSpy('MockTipoLocal');
            MockFotos = jasmine.createSpy('MockFotos');
            MockComentarios = jasmine.createSpy('MockComentarios');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Local': MockLocal,
                'Profile': MockProfile,
                'TipoLocal': MockTipoLocal,
                'Fotos': MockFotos,
                'Comentarios': MockComentarios
            };
            createController = function() {
                $injector.get('$controller')("LocalDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'projetoServiceApp:localUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
