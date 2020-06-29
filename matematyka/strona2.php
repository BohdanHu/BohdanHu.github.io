
   
   <!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8">
    <title>POTĘGOWANIE</title>
    <link rel="stylesheet" href="main.css">

</head>

<body>
    <header><img src="baner.jpg" alt="DZIAŁANIE MATEMATYCZNE"></header>
    <article>Menu<br>
        <a href="strona1.html">Proste działania</a><br>
        <a href="#">Potęgowanie</a>
    </article>
    <aside>
        <h1>POTĘGOWANIE</h1>
      <form action="strona2.php" method="get"> 
        <label>Podaj podstawę potęgi:<input type="number" name="a"></label><br><br>
        <label>Podaj dodatni, całkowity wykładnik potęgi:<input type="number" name="b"></label><br><br>
        
        <input type="submit" value="POTĘGOWANIE"   style="background: #3caea3;">
        </form> 
        <?php
         
        $a = $_GET["a"]; 
        $b = $_GET["b"];
        if ($a == "" || $b == "") 
        {
           echo  "Wpisz podstawę i wykładnik potęgi.";
        }
        else if($b < 0)
        {
            echo  "Wykładnik potęngi musi być dodatni.";
        }
        else
        {
            echo "Wynik działania wynosi:".  $a ** $b;
        }
 
        ?>
    </aside>
    <footer></footer>
   <!-- <script>
        function potegowanie() 
        {
            var a = document.getElementById("a").value;
            var b = document.getElementById("b").value;

            if (a == "" || b == "") 
            {
                document.getElementById("wynik").innerHTML = "Wpisz podstawę i wykładnik potęgi.";

            } 
            else if (b < 0) 
            {
                document.getElementById("wynik").innerHTML = "Wykładnik potęngi musi być dodatni.";
            } 
            
            else 
            {
                 


                document.getElementById("wynik").innerHTML = "Wynik działania wynosi:" + (a ** b);
  }
        }
    </script> -->
</body>
</html>
