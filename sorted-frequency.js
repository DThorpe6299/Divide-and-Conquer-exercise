function sortedFrequency(arr, val) {
    function findFirstOccurrence(arr, val) {
        let low = 0;
        let high = arr.length - 1;
        let firstIndex = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === val) {
                firstIndex = mid;
                high = mid - 1; // Continue searching in the left half
            } else if (arr[mid] < val) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return firstIndex;
    }

    function findLastOccurrence(arr, val) {
        let low = 0;
        let high = arr.length - 1;
        let lastIndex = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === val) {
                lastIndex = mid;
                low = mid + 1; // Continue searching in the right half
            } else if (arr[mid] < val) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return lastIndex;
    }

    const firstIndex = findFirstOccurrence(arr, val);
    if (firstIndex === -1) return 0; 
    const lastIndex = findLastOccurrence(arr, val);
    return lastIndex - firstIndex + 1;
}
module.exports = sortedFrequency