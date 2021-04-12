module.exports = (d, cb) => {
    pi = 3.142;
    if (d <= 0) {
        setTimeout(()=>
        cb(new Error("Diameter Must be greater than zero"), null) ,2000);
    }
    else {
        setTimeout (()=> 
        cb(null, {
            circumference: () => (pi * d),
            area: () => (pi* ((d/2)**2))
        }),2000)
    }

}