var numIdenticalPairs = function(nums) {
    var count =0;
    for(let i=0; i < nums.length; i++){
        for(let j=0; j < i; j++){
            if(nums[i] == nums[j]){
                count++;
            }
        }
    }
    return count;
};
