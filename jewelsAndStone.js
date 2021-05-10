var numJewelsInStones = function(jewels, stones) {
    var a = jewels.split('');
    var b = stones.split('');
    var count = 0;
    for(let i=0; i < a.length; i++){
        for(let j=0; j < b.length; j++){
            if(a[i] === b[j]){
                count++;
            }
        }
    }
    return count;
};
