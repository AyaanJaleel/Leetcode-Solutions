var decompressRLElist = function(nums) {
    var arr= [];
    for(let i=0; i <= nums.length; i+=2){
        var freq = nums[i];
        var value = nums[i+1];
        for(let j=0; j < freq; j++){
            arr.push(value)
        }
    }
    return arr;
    
    
};
