<?php

class HomeController
{
    public function index(): string 
    {
        $carousels = CarouselsRepository::getCarousels(); 
       
        
        $cards = CardsRepository::getCards(); 
       
        return BaseView::generate('Home', 'index', ['cards' => $cards, 'carousels' => $carousels]);

       
    }
    
}