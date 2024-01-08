
var majorityElement = function(nums) {
let [res,count] = [nums[0],1]

    for(let i=1;i<nums.length;i++){
        if(count<=0){
            if(res==nums[i]){
                count+=1;
            }
            else{
                count-=1;
            }
        }
        else{
            res=nums[i]
        }
    }
return res
};

console.log(majorityElement([3,2,3] ));