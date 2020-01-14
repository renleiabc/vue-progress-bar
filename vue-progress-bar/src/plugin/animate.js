/*
 * @Author: renlei
 * @Date: 2020-01-10 16:57:36
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-14 16:32:57
 * @Description: 
 */
function animate(obj, targetJSON, time, callback) {
  var interval = 10;
  if (window.navigator.userAgent.indexOf('MSIE') != -1) {
    interval = 50;
  }
  var semophorJSON = {};
  for (var k in targetJSON) {
    semophorJSON[k] = parseFloat(fetchComputedStyle(obj, k));
  }
  var maxCount = time / interval;
  var stepJSON = {};
  for (var k in targetJSON) {
    targetJSON[k] = parseFloat(targetJSON[k]);
    stepJSON[k] = (targetJSON[k] - semophorJSON[k]) / maxCount;
  }
  var count = 0;
  var t1 = new Date();
  var timer = setInterval(function() {
    for (var k in semophorJSON) {
      semophorJSON[k] += stepJSON[k];
      if (k != 'opacity') {
        obj.style[k] = semophorJSON[k] + 'px';
      } else {
        obj.style[k] = semophorJSON[k];
        obj.style.filter = 'alpha(opacity = ' + semophorJSON[k] * 100 + ')';
      }
    }
    count++;
    if (count >= maxCount) {
      for (var k in targetJSON) {
        if (k != 'opacity') {
          obj.style[k] = targetJSON[k] + 'px';
        } else {
          obj.style[k] = targetJSON[k];
          obj.style.filter = 'alpha(opacity = ' + targetJSON[k] * 100 + ')';
        }
      }
      clearInterval(timer);
      //console.log('time: ' + (new Date() - t1));
      callback && callback();
    }
  }, interval);
}

function fetchComputedStyle(obj, property) {
  if (window.getComputedStyle) {
    property = property.replace(/[A-Z]/g, function(word) {
      return '-' + word.toLowerCase();
    });
    return window.getComputedStyle(obj)[property];
  } else {
    property = property.replace(/\-([a-z])/g, function(match, $1) {
      return $1.toUpperCase();
    });
    return obj.currentStyle[property];
  }
}

export default animate;
