<?php

class CarouselRepository
{
    public static function getCarousel(int $id): ?Carousel
    {
        
        $query = DB::$connection->prepare("SELECT * FROM carousel WHERE id = :id");
        $query->execute(['id' =>$id]);

    
        $article = $query->fetchObject('Carousel');
    
        if(!$carousel) {
            return null;
        }

        return $carousel;
    }

}