<?php

class UsersController
{
    public function login(): string 
    {
        return BaseView::generate('Users', 'login');
    }

    public function registration(): string 
    {
        return BaseView::generate('Users', 'registration');
    }
}