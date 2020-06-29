/* function pole()
{
     var a = document.getElementById("a").value;
     if (a == "" || a == 0 || isNaN(a))
     {


         document.getElementById("wynik").innerHTML = "Należy wpisać wartość liczbową.";
     } 
    else 
     {
         document.getElementById("wynik").innerHTML = "P = a<sup><small>2</small></sup> ="+ a*a;
     }


 }

function obwod()
{
     var a = document.getElementById("a").value;
     if (a == "" || a == 0 || isNaN(a))
     {


         document.getElementById("wynik").innerHTML = "Należy wpisać wartość liczbową.";
     } 
    else 
     {
         document.getElementById("wynik").innerHTML = "Obw = 4a ="+ a*4;
     }


 }

*/
function oblicz(dzialanie)
{
    var a = document.getElementById("a").value;
    if (a == "" || a == 0 || isNaN(a))
    {

        document.getElementById("wynik").innerHTML = "Należy wpisać wartość liczbową.";
    } 
    else 
    {
        switch (dzialanie) 
        {
            case 1:
                document.getElementById("wynik").innerHTML = "P = a<sup><small>2</small></sup> =" + a * a;
                break;
            case 2:
                document.getElementById("wynik").innerHTML = "Obw = 4a =" + a * 4;
                break;
        }
    }
}
