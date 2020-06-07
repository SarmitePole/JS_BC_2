<?php

class Task
{
    private $title;
    private $isCompleted = false;

    public function __construct(string $title, bool $isCompleted = false)
    {
        $this->title = $title;
        $this->isCompleted = $isCompleted;
    }

    public function getTitle(): string
    {
        return $this->title;
    }
    //geteris - funkcija, kura palīdz tikt pie private property 


    public function setIsCompleted(bool $isCompleted): void
    {
        $this->isCompleted = $isCompleted;
    }
    //seteris - tas, kurš izvelk no private zonas vērtību un ļauj to samainīt


}




