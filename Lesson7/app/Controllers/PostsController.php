<?php

class PostsController
{
    public function index(): string 
    {
        $posts = PostsRepository::getPosts();    //Šo sac par BiznesaLoģiku, kura parasti stāv kontrolierī

        return BaseView::generate('Posts', 'index', $posts);
    }
}