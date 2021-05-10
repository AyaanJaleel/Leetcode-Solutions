var ParkingSystem = function(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
};

ParkingSystem.prototype.addCar = function(carType) {
    if(carType == 1 && this.big > 0){
        this.big--;
        return true;    
    }
    else if(carType == 2 && this.medium > 0){
        this.medium--;
        return true;    
    }
    else if(carType == 3 && this.small > 0){
        this.small--;
        return true;
       
    }else{
        return false;
    }
};
