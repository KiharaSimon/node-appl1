module.exports = (x, y, cb) => {
    if (x <= 0 || y <= 0) {
       setTimeout(() => 
       cb(new Error("Dimensions must be greater than zero"), null),
       2000);
    } 
    else {
        setTimeout(() => 
        cb(null, {
            perimeter: () => (2*(x + y)),
            Area: () => (x * y)

        }), 2000);
    }
}
