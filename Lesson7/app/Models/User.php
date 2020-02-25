<?php

class User
{
    public $email;
    public $firstName;
    public $lastName;

    public static function validate (array $data): array
    {
        $errors = [];
            if (!$data['email']) {
                $errors[] = 'Email is required. ';
            }

            if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                $errors[] = 'Email must be valid email adress.';
            }

            if (UsersRepository::getUserByEmail($data['email'])) {
                $errors[] = 'Email is alredy registered';
            }

            if (!$data['first-name']) {
                $errors[] = 'First name is required. ';
            }

            if (!$data['last-name']) {
                $errors[] = 'Last name is required. ';
            }

            if (!$data['password1']) {
                $errors[] = 'Password is required. ';
            }

            if (!$data['password1'] !=$data['password2']) {
                $errors[] = 'Passwords must match. ';
            }



        return $errors;
    }
}