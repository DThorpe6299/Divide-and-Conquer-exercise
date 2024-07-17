function findFloor(nums, val) {
    let low = 0;
    let high = nums.length - 1;
    let floor = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === val) {
            return nums[mid];
        } else if (nums[mid] < val) {
            floor = nums[mid];  // Update floor to current mid
            low = mid + 1;      // Search in the right half
        } else {
            high = mid - 1;     // Search in the left half
        }
    }

    return floor;
}

module.exports = findFloor