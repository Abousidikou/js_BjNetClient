import ndt7core from './BjNetCore.js';

function runSomething(testName, callback) {
      ndt7core.run(location.href, testName, function(ev, val) {
        if (ev === 'complete') {
          if (callback !== undefined) {
            callback()
          }
          return
        }
    })
}

function runDownload(callback) {
    runSomething('download', callback)
}

function runUpload(callback) {
  runSomething('upload', callback)
}

runDownload(function() { runUpload(); })