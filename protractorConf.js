exports.config = {
    framework: 'jasmine',
    useAllAngular2AppRoots: true,
    capabilities: {
        'browserName': 'chrome',
    },
    specs: ['protractorSpec.js']
}
