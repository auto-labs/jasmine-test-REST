describe('Sample test to execute math.org api', function () {
    getData('sampleTest.json');
    let url = jsonData.url;
    let method = jsonData.method;
    let data = undefined;
    it('Valid test to check GET request', function (done) {
        return makeRequest(url, method, data)
            .then(function (response) {
                expect(response).toBeDefined();
                expect(response.status).toBe(200);
                expect(response.statusText).toBe('OK');
                expect(response.data).toBe(jsonData.expectedResult);
                done();
            })
    });
});