var rect = {
    perimeter :(x, y) => (2*(x+y)),
    Area : (x,y) => (x*y)

}

var solveRect = (l, b) => {
    console.log("calculating props of rectangles with Dimensions of " + l + " and " + b);

    if (l <= 0 || b <= 0) {
        console.log("Dimensions must be greater than zero")

    }
    else {
        console.log("The area of the rectange of dimensions " + l + " width " + b + " is  " + rect.Area(l,b));
        console.log("The perimeter of the rectange of dimensions " + l + " width " + b + " is " + rect.perimeter(l,b));
    }


}

solveRect(10, 5);
solveRect(-1, 20);
