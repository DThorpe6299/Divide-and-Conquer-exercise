function findRotatedIndex(nums, val) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === val) {
            return mid;
        }

        // Determine which part is sorted
        if (nums[low] <= nums[mid]) { // Left part is sorted
            if (nums[low] <= val && val < nums[mid]) {
                high = mid - 1; // Search in the left part
            } else {
                low = mid + 1; // Search in the right part
            }
        } else { // Right part is sorted
            if (nums[mid] < val && val <= nums[high]) {
                low = mid + 1; // Search in the right part
            } else {
                high = mid - 1; // Search in the left part
            }
        }
    }

    return -1;
}

module.exports = findRotatedIndex