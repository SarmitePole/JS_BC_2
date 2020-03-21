<?php

class InfoController
{
    public function aboutUs(): string 
    {
        return BaseView::generate('Info', 'index');
    }
    
}