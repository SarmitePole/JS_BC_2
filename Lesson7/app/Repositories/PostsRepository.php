<?php

class PostsRepository
{
    public static function getPosts(): array 
    {
        $data = [
            [
                'id' => 123,
                'title' => 'Dievietes atziņa 123',
                'text' => 'Netici visam, ko lasi internetā. /A.Linkolns',
            ],

            [
                'id' => 124,
                'title' => 'Dievietes atziņa 124',
                'text' => 'Netici visam, ko lasi internetā. /Alberts',
            ],

            [
                'id' => 125,
                'title' => 'Dievietes atziņa 15',
                'text' => 'Netici visam, ko lasi internetā. /Karlis U',
            ],

        ];
        
        return $data;
    }
}