function getTriangleArea(a, h) {
	
	if (a > 0 && h > 0) {
		return a*h/2;
	} else {
		console.log('Nieprawidłowe dane');
	}
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(4, 6);
var triangle3Area = getTriangleArea(2, 8);

console.log( triangle1Area );
console.log( triangle2Area );
console.log( triangle3Area );