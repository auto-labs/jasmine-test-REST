describe('Sample test to execute math.org api', function () {
    const axios = require('axios').default;
    beforeAll(function (done) {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'testReports/',
                screenshotsFolder: 'images',
                takeScreenshotsOnlyOnFailures: true,
                consolidateAll: true,
                consolidate: true,
                cleanDestination: false
            }));
        done();
    });

    it('Valid test to check GET request', function (done) {
        let url = 'http://api.mathjs.org/v4/?expr=2%2B3*sqrt(4)';
        let method = 'GET';
        let data = undefined;
        axios({
            method: method,
            url: url,
            data: data
        })
            .then(function (response) {
                expect(response).toBeDefined();
                expect(response.status).toBe(200);
                expect(response.statusText).toBe('OK');
                expect(response.data).toBe(8);
                done();
            })
    });
});