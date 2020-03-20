<?php

class SuperSecretController
{
    public function index(): string 
    {
       if ($_SESSION['loggedIn'] != true) {
           header('Location: ?page=login');
           exit;
           //exit aptur lapas izpildi, tja viņa nebūs, tad neatļautā lapa paliks atvērta, pat, ja sesijas kukijs būs deletēts
       }

       return BaseView::generate('SuperSecret', 'index');
    }
}