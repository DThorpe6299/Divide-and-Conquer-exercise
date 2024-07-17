function findRotationCount(nums) {
  let low = 0;
  let high = nums.length-1;

  while(low<=high){
    let mid = Math.floor((low+high)/2);
    let prevMid = mid -1;

    //Determin if mid is minimum
    if(nums[mid]<nums[prevMid]){
        return mid;
    }else if(nums[mid]<nums[low]){
        high = mid-1;
    }else if(nums[mid]>nums[high]){
        low = mid+1;
    }else{
        return 0;
    }
  }
}

module.exports = findRotationCount