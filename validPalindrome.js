var isPalindrome = function(s) {
    var str = s.toLowerCase().replace(/[^A-Z0-9]/ig, "").split('').join('');
    var revStr = str.split('').reverse().join('');
    
    return str === revStr ? true : false;
};
