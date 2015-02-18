'use strict';

describe('Directive: artishanNav', function () {

  // load the directive's module
  beforeEach(module('artishanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<artishan-nav></artishan-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the artishanNav directive');
  }));
});
