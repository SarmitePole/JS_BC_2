<?php

class ArticlesRepository
{
    public static function getArticles(): array 
    {
        
        // dd(__DIR__);
        $dataJson = file_get_contents(__DIR__ . '/../data/articles.json');

        $articles = json_decode($dataJson, true);

        $output = [];
        foreach ($articles as $article) {
            $articleObj = new Article();
            $articleObj->id = $article['id'];
            $articleObj->title = $article['title'];
            $articleObj->text = $article['text'];
            $output[] = $articleObj;
        }
        
        return $output;
    }

    public static function getArticle(int $id): ?Article
    {
        $articles = self::getArticles(); //Šitā dabū visus Articles
        foreach ($articles as $article) {
            if ($article->id == $id) {
                return $article;
            }
        }

        return null;
    }

}