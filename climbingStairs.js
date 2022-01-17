var climbStairs = function(n) {
    let arr = [0, 1, 2 ,3];
    
    if(n <= 3){
        return n;
    }
    
    for(let i=4; i <= n; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    
    return arr[n];
    
}
