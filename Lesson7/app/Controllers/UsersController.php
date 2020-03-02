<?php

class UsersController
{
    public function login(): string 
    {
        $errors = [];
        if ($_POST) {
            $user = UsersRepository::getUserByEmailAndPassword($_POST['email'], $_POST['password']); 
            if ($user) {
                $_SESSION['loggedIN'] = true;
                $_SESSION['first_name'] = $user->first_name;
                $_SESSION['last_name'] = $user->last_name;
                

            }            
            
                
            } else {
                $errors[] = 'Credentials are invalid';
            }
        }

        return BaseView::generate('Users', 'login', ['errors' => $errors]);
    }

    public function registration(): string 
    {
        
        $errors = [];

        if ($_POST) {
            $errors = User::validate($_POST);

            if (!$errors) {
                //ja kļūdu nav tad lietotaja datus ieliek datu bāzē
                UsersRepository::createUser($_POST);
                header('Location: ?page=login');

            }

        }
        
        
        // dd($_POST); 
        // (svarīgi, lai reģistrācijas lapas formā būtu method būtu POST)

       
        return BaseView::generate('Users', 'registration', ['errors' => $errors]);
    }


}