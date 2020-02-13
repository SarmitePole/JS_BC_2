<?php

class BaseView
{
    public static function generate(string $controller, string $view): string 
    {
        ob_start();

        require __DIR__ . '/../Views/Global/header.php';
        require __DIR__ . '/../Views/' . $controller . '/' . $view . '.php';
        require __DIR__ . '/../Views/Global/footer.php';
        // ši jau ir konkatinēts

        $html = ob_get_clean(); //dabūt kontroli par to, kas tiek attēlots uz ekrana..piemeram, lai pazūd

        return $html;
        
    }
}