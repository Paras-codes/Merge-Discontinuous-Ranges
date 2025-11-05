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

  const merged = [sortedRanges[0]];

  for (let i = 1; i < sortedRanges.length; i++) {
    const currentRange = sortedRanges[i];
    const lastMerged = merged[merged.length - 1];

    const gap = currentRange[0] - lastMerged[1];

    if (gap <= threshold) {
      lastMerged[1] = Math.max(lastMerged[1], currentRange[1]);
    } else {
      merged.push(currentRange);
    }
  }

  return merged;
};

module.exports = {
  mergeTimeRanges
};
