var removeElement = function(nums, val) {
    for(j=0;j<nums.length;j++){
        if(nums[j]!=val){
            nums[i]=nums[j];
            i++;
        }
    }
    return i
};