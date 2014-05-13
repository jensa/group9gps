function myFunction(lat1, lon1, bearing, distance) {
	var rEarth = 6371.01;
    var rlat1 = deg2rad(lat1);
    var rlon1 = deg2rad(lon1);
    var rbearing = deg2rad(bearing);
    var rdistance = distance / rEarth; //normalize linear distance to radian angle;

    var rlat = Math.asin( Math.sin(rlat1) * Math.cos(rdistance) + Math.cos(rlat1) * Math.sin(rdistance) * Math.cos(rbearing) );

    if (Math.cos(rlat) == 0 || Math.abs(Math.cos(rlat)) < 0.00001){ //# Endpoint a pole
    	rlon=rlon1;}
    else{
    	rlon = ( (rlon1 - Math.asin( Math.sin(rbearing)* Math.sin(rdistance) / Math.cos(rlat) ) + Math.PI ) % (2*Math.PI) ) - Math.PI;
    }
    lat = rad2deg(rlat);
    lon = rad2deg(rlon);
    document.getElementById("demo").innerHTML = lat+" "+lon;
}

function deg2rad(degrees){
	return degrees*Math.PI/180;
}
function rad2deg(radians){
	return radians*180/Math.PI;
}