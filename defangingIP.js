var defangIPaddr = function(address) {
    var string = '';
    var arr = address.split('.');
    for(let i=0; i < arr.length; i++){
        string += arr[i] + ' ' + '[.]'
    }
    var a = string.split(' ');
    a.pop();
    return a.join('');
};
