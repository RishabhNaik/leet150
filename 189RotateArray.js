var rotate = function(nums, k) {
    k=k%nums.length;

    let l=0;
    let r=nums.length-1;

    while(l<r){
        let temp=nums[l];
        nums[l]=nums[r];
        nums[r]=temp;

        l++;
        r--;
    }

    l=0;
    r=k-1;

    while(l<r){
        let temp=nums[l];
        nums[l]=nums[r];
        nums[r]=temp;

        l++;
        r--;
    }

    l=k;
    r=nums.length-1;

    while(l<r){
        let temp=nums[l];
        nums[l]=nums[r];
        nums[r]=temp;

        l++;
        r--;
    }
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7],3));