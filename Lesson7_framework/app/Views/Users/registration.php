<div class="container">
    <div class="row">
        <div class="col">
            <h4>This is place for safe registration</h4>
        </div>
    </div>

    <?php
    if ($errors) {
        echo '<div class="row">';
        echo ' <div class="col">';
        echo '  <div class="alert alert-danger">';
        echo '   <ul>';
        foreach ($errors as $error) {
            echo '<li>' . $error . '</li>';
        }
        echo '   </ul>';
        echo '  </div class="alert alert-danger">';
        echo ' </div class="col">';
        echo '</div class="row">';
        
    }
    ?>
    <form action="?page=registration" method="POST">

        <div class="row">
            <div class="col-4">
                <label for="email-input">Email</label>
            </div>

            <div class="col-8">
                <input type="text" class="form-control" id="email-input" name="email" >
            </div>
    
        </div>
    
        <div class="row">
            <div class="col-4">
                <label for="first-name-input">First name</label>
            </div>

            <div class="col-8">
                <input type="text" class="form-control" id="first-name-input" name="first-name">
            </div>
    
        </div>

        <div class="row">
            <div class="col-4">
                <label for="last-name-input">Last name</label>
            </div>

            <div class="col-8">
                <input type="text" class="form-control" id="last-name-input" name="last-name">
            </div>
    
        </div>

        <div class="row">
            <div class="col-4">
                <label for="password-input">Password</label>
            </div>

            <div class="col-8">
                <input type="password" class="form-control" id="re-type-password-input" name="password1">
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <label for="password-input">Password repeat</label>
            </div>

            <div class="col-8">
                <input type="password" class="form-control" id="re-type-password-input" name="password2">
            </div>
    
        </div>

        <div class="row">
            <div class="col">
                <input type="submit" value="Register" class="btn btn-primary">
            </div>
        </div>







    </form>


</div>







