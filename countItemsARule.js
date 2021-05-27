var countMatches = function(items, ruleKey, ruleValue) {
    var count = 0;
    var index = 0;
    if(ruleKey === 'type'){
        index = 0;
    }if(ruleKey === 'color'){
        index = 1;
    }if(ruleKey === 'name'){
        index = 2;
    }
    
    for(let i=0; i < items.length; i++){
        if(items[i][index] === ruleValue){
            count++;
        }
    }
    return count;
};
