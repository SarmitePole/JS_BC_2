<?php

class UsersRepository
{
    public static function getUserByEmail(string $email): ?User
    {
        $query = DB::$connection->prepare("SELECT * FROM users WHERE email = :email");
        $query->execute(['email' => $email]);

        $user = $query->fetchObject('User');

        if ($user) {
            return $user;
        }

        return null;
    }

    public static function createUser(array $data): void
    {
        $query = DB::$connection->prepare("INSERT INTO users SET email = :email, first_name = :firstName, last_name = :lastName, password = :password");
        $query->execute([
            'email' => $data['email'],
            'firstName' => $data['first-name'],
            'lastName' => $data['last-name'],
            'password' => md5($data['password']),
            // 'password' => $data['password'],
        ]);
    }

    

    public static function getUsers(): array
    {
        $query = DB::$connection->query("SELECT * FROM users");

        $output = [];
        while ($post = $query->fetchObject('User')) {
            $output[] = $post;
        }

        return $output;
    }
}