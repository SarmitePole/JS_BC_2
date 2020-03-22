<?php

class HomeController
{
    public function index(): string 
    {
        return BaseView::generate('Home', 'index');
    }

    
}