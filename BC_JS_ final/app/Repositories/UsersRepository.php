<?php

class UsersRepository
{
    public static function createUser(array $data): void
    {
        $query = DB::$connection->prepare("INSERT INTO users SET email = :email, first_name = :firstName, last_name = :lastName, password = :password");
        $query->execute([
            'email' => $data['email'],
            'firstName' => $data['first-name'],
            'lastName' => $data['last-name'],
            'password' => md5($data['password']),
            
        ]);
    }

}