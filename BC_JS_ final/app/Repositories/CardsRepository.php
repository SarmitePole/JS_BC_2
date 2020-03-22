<?php

class CardsRepository
{
    public static function getCards(): array 
    {
        $query = DB::$connection->query("SELECT * FROM cards");
        
        $output = [];
        while ($card = $query->fetchObject('Card')) {
            $output[] = $card;
        }
        
        return $output;
    }
    
}