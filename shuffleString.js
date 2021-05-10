var restoreString = function(s, indices) {
    var arr = [];
    var arr2 = [];
    var string = s.split('');
    for(let i=0; i < indices.length; i++){
        arr.push({index: indices[i], word: string[i]})
    }
    
    arr.sort((a,b) => a.index - b.index);
    
    for(let i=0; i < indices.length; i++){
        arr2.push(arr[i].word)
    }
    return arr2.join('');
};
