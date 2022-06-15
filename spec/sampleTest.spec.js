describe('Sample test to execute math.org api', function () {
    let url = 'http://api.mathjs.org/v4/?expr=2%2B3*sqrt(4)';
    let method = 'GET';
    let data = undefined;
    it('Valid test to check GET request', function (done) {
        return makeRequest(url, method, data)
            .then(function (response) {
                expect(response).toBeDefined();
                expect(response.status).toBe(200);
                expect(response.statusText).toBe('OK');
                expect(response.data).toBe(8);
                done();
            })
    });
    it('Valid test to check POST request', function (done) {
        url = 'http://api.mathjs.org/v4';
        let header = {
            'content-type': 'application/json'
        }
        data = {
            expr: [
              "a = 1.2 * (2 + 4.5)",
              "a / 2",
              "5.08 cm in inch",
              "sin(45 deg) ^ 2",
              "9 / 3 + 2i",
              "b = [-1, 2; 3, 1]",
              "det(b)"
            ],
            "precision": 14
          };
          method = 'POST';
        return makeRequest(url, method, data, header)
            .then(function (response) {
                expect(response).toBeDefined();
                expect(response.status).toBe(200);
                expect(response.statusText).toBe('OK');
                expect(response.data.result[0]).toBe('7.8');
                expect(response.data.result[1]).toBe('3.9');
                expect(response.data.result[2]).toBe('2 inch');
                expect(response.data.result[3]).toBe('0.5');
                expect(response.data.result[4]).toBe('3 + 2i');
                expect(response.data.result[5]).toBe('[[-1, 2], [3, 1]]');
                expect(response.data.result[6]).toBe('-7');
                done();
            })
    });
});