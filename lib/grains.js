'use strict';

var Grains = function(){};

Grains.prototype.square = function(num){
  return Math.pow(2, (num - 1));
};

Grains.prototype.total = function(currentSq){
  return this.square(currentSq + 1) - 1;
}