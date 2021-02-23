/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      callback(err);
    } else {
      var firstLine = data.split('\n')[0];
      callback(err, firstLine);
    }
  });
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request('get', url)
    .then(function(resp) { callback(null, resp.statusCode); })
    .catch(callback);
};

// Calling needle() directly returns a Promise.
// Besides method and url, all parameters are optional, although when sending a post, put or patch request you will get an error if data is not present.

// needle('get', 'http://some.url.com')
//   .then(function(resp) { console.log(resp.body) })
//   .catch(function(err) { console.error(err) })
// })

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
