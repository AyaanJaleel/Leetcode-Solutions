var interpret = function(command) {
    var arr = [];
    for(let i=0; i < command.length; i++){
        if(command[i] === '(' && command[i+1] === ')'){
            arr.push('o');
        }else if(command[i] === 'G'){
            arr.push('G');
        }else if(command[i] === '(' && command[i+1] === 'a'){
            arr.push('al');
        }
        
    }
    return arr.join('');
};
