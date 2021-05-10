var sum = function(arr){
    var total =0;
    for(let i=0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

var maximumWealth = function(accounts) {
    var arr = [];
    for(let i=0; i < accounts.length; i++){
        var a = sum(accounts[i])
        arr.push(a)
    }
    return Number(Math.max(...arr));
};
