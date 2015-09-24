module.exports = function () {
 exports.setEventListener = function (callback) {
  cordova.exec (callback, function (e) {
    console.log(e);
    alert(e);
  }, "OnDestroy", "setEventListener", [])
 }
 return exports
} ()
