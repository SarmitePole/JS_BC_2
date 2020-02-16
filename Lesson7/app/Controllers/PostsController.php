<?php

class PostsController
{
    public function index(): string 
    {
        $posts = PostsRepository::getPosts();    //Šo sac par BiznesaLoģiku, kura parasti stāv kontrolierī

        var_dump($posts);

        return BaseView::generate('Posts', 'index', ['posts' => $posts]);
    }
}