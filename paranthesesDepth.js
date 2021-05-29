var maxDepth = function(s) {
    var count = 0;
    var balanced = 0;
    for(let i=0; i < s.length; i++){
        if(s[i] === '('){
            count++;
        }
        if(s[i] === ')'){
            count--;
        }
        if(count > balanced){
            balanced = count;
        }
        
    }
    return balanced;
};
