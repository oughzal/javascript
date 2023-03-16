<?php 
require_once("person.php"); 
$p = new Person("nom1","Prenom1");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firt php doc</title>
</head>
<body>
<h1>ID : <?php echo $p->id;  ?></h1>   
<h1>Nom : <?php echo $p->nom;  ?></h1>
<h1>Prenom : <?php echo $p->prenom;  ?></h1>
    
    
</body>
</html>