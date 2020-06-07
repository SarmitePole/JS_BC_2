<?php

class ChatController
{
    public function index(): string 
    {    
        return BaseView::generate('Chat', 'index');
    }
    
}