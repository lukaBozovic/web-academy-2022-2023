function getCurrentRowData(id){
    var name = document.getElementById("name-"+id).innerText;
    var id = document.getElementById("id-"+id).innerText;
    var email = document.getElementById("email-"+id).innerText;
    var phoneNumber = document.getElementById("phone-"+id).innerText;

    insertInModal(id, name, email, phoneNumber);
}

function insertInModal(id, name, email, phoneNumber){
    var modalBody = document.getElementById("modalBody");
    modalBody.innerHTML= `
    <form action="editUser.php" method="POST">
    <div class="row">
        <input type="hidden" name="id" value="${id}">
        <div class="row">
            <input type="text" required name="name" class="form-control" value="${name}" placeholder="Unesite ime...">
        </div>
        
        <div class="row">
            <input type="email" required name="email" class="form-control mt-3" value="${email}" placeholder="Unesite email...">
        </div>
        
        <div class="row">
            <input type="text" required name="phoneNumber" class="form-control mt-3" value="${phoneNumber}" placeholder="Unesite broj telefona...">
        </div>
    </div>
    <div class="row mt-3">
        <button class="offset-10 col-2 btn btn-primary">Edit</button>
    </div>

    </form>
    
                        `
}