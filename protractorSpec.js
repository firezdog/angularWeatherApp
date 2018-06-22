// spec.js
describe('Angular Weather App', function () {

    it('should have a title', function () {
        browser.get('http://localhost:8080');
        expect(browser.getTitle()).toEqual('Weather App');
    });

});
