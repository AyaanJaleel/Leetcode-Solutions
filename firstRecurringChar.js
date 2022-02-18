let map = {};

function recur(arr){
    for(let i=0; i < arr.length; i++){
        if(map.hasOwnProperty(arr[i])){
            return arr[i];
        }else{
            map[arr[i]] = i;
        }
    }
    return undefined;
}
