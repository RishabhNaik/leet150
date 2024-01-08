var removeDuplicates = function(nums) {
    var i=0;
    for(let j = 2;j<nums.length;j++){
        if(nums[i-2]!==nums[j]){
            nums[i]=nums[j];
            i++;
        }
    }
    return [nums,i]
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
console.log(removeDuplicates([1,1,1,2,2,3]));


