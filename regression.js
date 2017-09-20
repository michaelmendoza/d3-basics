
function linearLeastSquares(x, y) {
	var beta1, beta2;
	var xBar = 0;
	var yBar = 0;
	var temp1 = 0;
	var temp2 = 0;
	var count = x.length;

	// Calculate mean: x-bar and y-bar
	for (var i = 0; i < count; i++) {
		xBar = xBar + x[i];
		yBar = yBar + y[i];
	}
	xBar = xBar / count;
	yBar = yBar / count;

	// Calculate beta2
	for (var i = 0; i < count; i++) {
		temp1 = temp1 + (x[i] - xBar) * (y[i] - yBar);
		temp2 = temp2 + (x[i] - xBar) * (x[i] - xBar);
	}
	beta2 = temp1 / temp2;

	// Calculate beta1
	beta1 = yBar - beta2 * xBar;

	// Return coefficents of regression
	return [beta1, beta2];
}

function NonLinearLeastSquares(x, y) {
	
}