/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) {
    return [];
  }

  if (ranges.length === 1) {
    return ranges;
  }

  const sortedRanges = ranges.slice().sort((a, b) => a[0] - b[0]);

  // initialize result array with the first range
  const merged = [sortedRanges[0]];

  // iterate through sorted ranges starting from the second one
  for (let i = 1; i < sortedRanges.length; i++) {
    const currentRange = sortedRanges[i];
    const lastMerged = merged[merged.length - 1];

    // calculate the gap between the last merged range and current range
    const gap = currentRange[0] - lastMerged[1];

    // check if ranges should be merged:
    // - they overlap (gap <= 0)
    // - they are within threshold (gap > 0 && gap <= threshold)
    if (gap <= threshold) {
      // merge by extending the end of the last merged range
      // use Math.max to handle overlapping ranges correctly
      lastMerged[1] = Math.max(lastMerged[1], currentRange[1]);
    } else {
      // ranges are too far apart, add current range as new
      merged.push(currentRange);
    }
  }

  return merged;
};

module.exports = {
  mergeTimeRanges
};
