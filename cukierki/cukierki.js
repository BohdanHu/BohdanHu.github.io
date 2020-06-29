function ksztalt()
{
	var a = document.getElementById("a").value;
	
	if(a==1)
	document.getElementById("wynik").innerHTML = "  to jest banan";
	
	if else(a==2)
	document.getElementById("wynik").innerHTML = "  to jest lemon";

	if else(a==3)
	document.getElementById("wynik").innerHTML = "  to jest dynia";

	else
	document.getElementById("wynik").innerHTML = "  nie ma takiego";

}



function kolor()
{
	var a1 = document.getElementById("a1").value;
	var b1 = document.getElementById("b1").value;
	var c1 = document.getElementById("c1").value;
	
	
	
	
	
	
	 if(a1==""||b1==""||c1=="")
	document.getElementById("wynik1").innerHTML = "Wpisz RGB";
	else if(a1<256 && b1<256 && c1<256)
	var kolor = "<input type=\"button\" style=\"color:rgb(a1, b1, c1);\">";
	 
	document.getElementById("wynik1").innerHTML = kolor;

	 else 
	document.getElementById("wynik1").innerHTML = "Nie ma takiego koloru, RGB tylko od 0 do 255.";

}



