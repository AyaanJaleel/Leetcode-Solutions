var smallerNumbersThanCurrent = function(nums) {
    var count=0;
    var arr=[];
    var arr2=[];
    for(let i=0; i< nums.length; i++){
        for(let j=0; j < nums.length; j++){
            if(nums[i] > nums[j]){
                count++;
            }
        }
        arr.push(count)
    }
    arr2.push(arr[0]);
    for(let i=0; i< arr.length; i++){
        arr2.push(Math.abs(arr[i] - arr[i+1]))
    }
    arr2.pop()
    return arr2;
};
