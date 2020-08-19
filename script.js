if(window.matchMedia('(min-width: 768px)').matches){
	function openNav() {
		document.getElementById("mySidenav").style.width = "26%";
	}
} else {
	function openNav() {
		document.getElementById("mySidenav").style.width = "100%";
	}
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}





/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav d-md-none d-lg-none d-xl-none") {
        x.className += " responsive";
    } else {
        x.className = "topnav d-md-none d-lg-none d-xl-none";
    }
}