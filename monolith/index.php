<?php
    include './getFromDatabase.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
    <div class="container text-center mt-5" id="content">
        <form action="storeToDatabase.php" method="POST">
            <div class="row">
                <div class="col-4">
                    <input type="text" required name="name" class="form-control" placeholder="Unesite ime...">
                </div>
                
                <div class="col-4">
                    <input type="email" required name="email" class="form-control" placeholder="Unesite email...">
                </div>
                
                <div class="col-4">
                    <input type="text" required name="phoneNumber" class="form-control" placeholder="Unesite broj telefona...">
                </div>
            </div>
            <div class="row mt-3">
                <button class="offset-10 col-2 btn btn-primary">Dodaj</button>
            </div>
        
        </form>

    <?php
        $data = getFromDatabase();
        foreach($data as $currentElement){
            $name = $currentElement["name"];
            $email = $currentElement["email"];
            $phoneNumber = $currentElement["phoneNumber"];
            echo "<p>Name : $name, Email : $email, Phone number: $phoneNumber </p>";
        }

    ?>

    </div>
    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>