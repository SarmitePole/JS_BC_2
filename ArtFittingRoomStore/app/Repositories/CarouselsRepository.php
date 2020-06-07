<?php

class CarouselsRepository
{
    public static function getCarousels(): array 
    {
        
        $query = DB::$connection->query("SELECT * FROM carousels");
        
        $output = [];

        while ($carousel = $query->fetchObject('Carousel')) {
            $output[] = $carousel;
        }
        
        return $output;
    }
   
    
}