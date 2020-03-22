<?php

class UsersController
{   
    public function registration(): string 
    {
        $errors = [];

        if ($_POST) {
            $errors = User::validate($_POST);

            if (!$errors) {
                //ja kļūdu nav tad lietotāja datus ieliek datu bāzē
                UsersRepository::createUser($_POST);
                header('Location: ?page=login');
            }
            
        }
                
        // dd($_POST); 
        // (svarīgi, lai reģistrācijas lapas formā būtu method būtu POST)
       
        return BaseView::generate('Registration', 'index');
    }

}