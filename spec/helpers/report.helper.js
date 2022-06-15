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