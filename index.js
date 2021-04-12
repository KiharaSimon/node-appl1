var rect = require('./rectangle');
var circle = require('./circle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "
                + l + " and b = " + b);
    rect(l,b, (err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.Area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
};

function solveCircle(diameter) {
    console.log("Solving for circle with diameter = " + diameter )

    circle(diameter, (err, circle) => {
        if(err) {
            console.log("ERROR: " + error.message);
        }
        else {
            console.log("The area of the circle with diameter = " + diameter + " is " + circle.area());
            console.log("The circumference of the circle with diameter = " + diameter + " is " + circle.circumference());
        }
    })
}
solveRect(10, 5);
solveCircle(7);