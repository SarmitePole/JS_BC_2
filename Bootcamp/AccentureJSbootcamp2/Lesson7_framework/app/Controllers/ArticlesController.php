<?php

class ArticlesController
{
    public function index(): string 
    {
        $articles = ArticlesRepository::getArticles(); 
       
        return BaseView::generate('Articles', 'index', ['articles' => $articles]);
    }

    public function viewArticle(): string
    {
        $articleID = $_GET['id'] ?? 0;
        $article = ArticlesRepository::getArticle($articleID);
     
        return BaseView::generate('Articles', 'viewArticle', ['article' => $article]);
    }
}