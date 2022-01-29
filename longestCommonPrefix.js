var longestCommonPrefix = function(strs) {
    if (strs.length === 0) { 
        return ''; 
    }
    
    return strs.reduce((prev, next) => {
        let index = 0;
        while (prev[index] && next[index] && prev[index] === next[index]) 
            index++;
        return prev.slice(0, index);
    });
};
