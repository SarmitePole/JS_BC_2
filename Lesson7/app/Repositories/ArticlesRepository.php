<?php

class ArticlesRepository
{
    public static function getArticles(): array 
    {
        
        // dd(__DIR__);
        $dataJson = file_get_contents(__DIR__ . '/../data/articles.json');
        
        return json_decode($dataJson, true);
    }

    public static function getArticle(int $id): ?array
    {
        $articles = self::getArticles();
        foreach ($articles as $article) {
            if ($article['id']== $id) {
                return $article;
            }
        }

        return null;
    }

}