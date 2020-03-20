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
       
        return BaseView::generate('Users', 'registration', ['errors' => $errors]);
    }

    public function index(): string 
    {
        header("Access-Control-Allow-Origin: *");

        $users = UsersRepository::getUsers();

        $output = [];
        foreach ($users as $user) {
            $output[] = [
                'name' => $user->first_name . ' ' . $user->last_name, 'email' => $user->email
            ];
        }

        return json_encode($output);
    }

}