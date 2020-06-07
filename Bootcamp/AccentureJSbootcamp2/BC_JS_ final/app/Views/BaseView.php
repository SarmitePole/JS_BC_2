<?php

class BaseView
{
    public static function generate(string $controller, string $view, $data = []): string 
    {
        extract($data);

        ob_start();

        require __DIR__ . '/../Views/Global/header.php';
        require __DIR__ . '/../Views/' . $controller . '/' . $view . '.php';
        require __DIR__ . '/../Views/Global/footer.php';
       
        $html = ob_get_clean(); 

        return $html;
        
    }
}