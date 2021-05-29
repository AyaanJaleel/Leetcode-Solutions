var decode = function(encoded, first) {
    var arr = [first]
    for(let i=1; i < encoded.length+1; i++){
        arr[i]=arr[i-1] ^ encoded[i-1];
    }
    return arr;
};
