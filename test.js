const { mergeTimeRanges } = require('./mergeTimeRanges.js');

console.log('Example 1:');
const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold1 = 200;
console.log('Input:', ranges1);
console.log('Threshold:', threshold1);
console.log('Output:', mergeTimeRanges(ranges1, threshold1));
console.log('Expected: [[1000, 2000], [2500, 4100], [8000, 9500]]');
console.log();

console.log('Example 2:');
const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
const threshold2 = 4;
console.log('Input:', ranges2);
console.log('Threshold:', threshold2);
console.log('Output:', mergeTimeRanges(ranges2, threshold2));
console.log('Expected: [[0, 10], [15, 20], [25, 30]]');
console.log();

console.log('Example 3:');
const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
const threshold3 = 3;
console.log('Input:', ranges3);
console.log('Threshold:', threshold3);
console.log('Output:', mergeTimeRanges(ranges3, threshold3));
console.log('Expected: [[0, 35]]');
console.log();

// Additional edge case tests
console.log('edge Case - empty array:');
console.log('Output:', mergeTimeRanges([], 10));
console.log('Expected: []');
console.log();

console.log('edge Case - single range:');
console.log('Output:', mergeTimeRanges([[1, 5]], 10));
console.log('Expected: [[1, 5]]');
console.log();

console.log('edge Case - overlapping ranges:');
const ranges4 = [[1, 10], [5, 15], [14, 20]];
console.log('Input:', ranges4);
console.log('Output:', mergeTimeRanges(ranges4, 0));
console.log('Expected: [[1, 20]]');
