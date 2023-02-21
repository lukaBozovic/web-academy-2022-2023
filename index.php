<?php
    include './getFromDatabase.php';
    include './userOperations.php';
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
    <div class="container mt-5">
        
        <nav class="navbar navbar-light bg-light">
            <form action="index.php" method="GET" class="form-inline">
            <div class="row">
                <div class="col-10">
                    <input name="term" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                </div>
                <div class="col-2">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
            </form>
        </nav>
        
    
        <table class="table table-hover">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <?php
                    $data = getFromDatabase();
                    $term = "term";
                    if (key_exists('term', $_GET)) {
                        //pretvaranje u mala slova da nas search bolje pretrazuje
                        $term = strtolower($_GET['term']);
                        $data = array_filter($data, function ($currentElement) use ($term) {
                                    $name = strtolower($currentElement['name']);
                                    $email = strtolower($currentElement['email']);
                                    $phoneNumber = strtolower($currentElement['phoneNumber']);
                                    return str_contains($name, $term) ||
                                        str_contains($email, $term) ||
                                        str_contains($phoneNumber, $term);
                        });
                    }
                
                    if ($data === null)
                        echo '<tr>
                                <td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td>
                              </tr>';
                    else {
                        foreach ($data as $currentElement) {
                            $id = $currentElement["id"];
                            $name = $currentElement["name"];
                            $email = $currentElement["email"];
                            $phoneNumber = $currentElement["phoneNumber"];
                            echo "<tr>
                                    <td id=\"id-$id\" value=\"$id\">$id</td>
                                    <td id=\"name-$id\">$name</td>
                                    <td id=\"email-$id\">$email</td>
                                    <td id=\"phone-$id\">$phoneNumber</td>
                                    <td>
                                    <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" onclick=\"getCurrentRowData($id)\" data-target=\"#exampleModal\">
                                        Edit
                                    </button>
                                    </td>
                                    <td>
                                        <form action=\"./deleteUser.php\" method=\"POST\">
                                            <input type=\"hidden\" name=\"id\" value=\"$id\">
                                            <button class=\"btn btn-danger\">X</button>
                                        </form>
                                    </td>
                                  </tr>";
                        }
                    }
                ?>
            </tbody>
        </table>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body" id="modalBody">
            
        </div>
        </div>
    </div>
    </div>


    </div>
    

    <script src="./app.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>