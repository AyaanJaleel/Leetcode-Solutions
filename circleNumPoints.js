var countPoints = function(points, queries) {
    var arr = [];
    for(let i=0; i < queries.length; i++){
        var count=0;
        var rds = queries[i][2] * queries[i][2];
        for(let j=0; j < points.length; j++){ 
            var distance = dist(queries[i][0], points[j][0], queries[i][1], points[j][1]);
            if(distance <= rds){
                count++;
            }
        }
        arr.push(count)
    }
    return arr;
};

var dist = function(x1, x2, y1, y2){
    var distanceX = Math.pow((x2 - x1), 2);
    var distanceY = Math.pow((y2 - y1), 2);
    return distanceX + distanceY;
}
