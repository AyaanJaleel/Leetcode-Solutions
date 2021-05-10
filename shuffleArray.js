var shuffle = function(nums, n) {
    var shuffledArray = [];
    var arr1 = [];
    for(let i=0; i< n;i++){
        arr1.push(nums[i])
    }
    
    var arr2 = [];
    for(let i=n; i< nums.length;i++){
        arr2.push(nums[i])
    }
    for(let i=0; i < nums.length/2; i++){
        shuffledArray.push(arr1[i]);
        shuffledArray.push(arr2[i]);
    }
    return shuffledArray;
};
