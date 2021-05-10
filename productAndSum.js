var subtractProductAndSum = function(n) {
    var product = String(n).split('').map(x => Number(x)).reduce((a,c) => a * c);
    var sum = String(n).split('').map(x => Number(x)).reduce((a,c) => a + c);
    return product - sum;
    
};
