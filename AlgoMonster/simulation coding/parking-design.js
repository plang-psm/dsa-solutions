/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

let parkingCount

var ParkingSystem = function(big, medium, small) {
    parkingCount = [0, big, medium, small]
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(carType < 1 || carType > 3) return false
    if(parkingCount[carType] === 0) return false
    parkingCount[carType]--
    return true
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */