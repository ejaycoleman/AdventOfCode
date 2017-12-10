// 1, 3, 5, 7...

// when it's 3: 3, 5, 7 and 9 are in the corners
// when its 5: 13, 17, 21 and 25 are in the corners

// bottom right corner will be row cubed

// based on the number, look for the next square number.
// The square root of this will be the rows

var number = 368078
var rows;
var bottomRight;

for (var i = number; i < number*number; i++) {
  if (Math.sqrt(i) % 1 === 0) {
    //rows = Math.sqrt(i);
    rows = Math.sqrt(i);
    bottomRight = i;

    break;
  }
}

//console.log(rows);


if (bottomRight - number < rows) {
  // bottom row
  var difference = bottomRight - number;
  xValue = Math.sqrt((difference-(rows-1)/2)*(difference-(rows-1)/2));
  yValue = (rows-1)/2;
} else if (bottomRight - number < rows*2) {
  // left column
} else if (bottomRight - number < rows* 3) {
  // top row
} else if (bottomRight - number < rows*4) {
  // right column
}

console.log(xValue);
console.log(yValue);
var total = xValue+yValue;
console.log("total: "+total)

// for 368078, it is on the 607th now
// bottom right value is 368449;
