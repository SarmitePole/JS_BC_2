<?php

class PostsController
{
    public function index(): string 
    {
        $posts = PostsRepository::getPosts();    //Šo sauc par BiznesaLoģiku, kura parasti stāv kontrolierī
       
        return BaseView::generate('Posts', 'index', ['posts' => $posts, 'user' => 'Koļa']);
    }

    public function viewPost(): string
    {
        $postID = $_GET['id'] ?? 0;
        $post = PostsRepository::getPost($postID);

        // dd($post); lai pārbaudītu, ko esam pasūtījuši
        
        return BaseView::generate('Posts', 'viewPost', ['post' => $post, 'user' => 'Koļa']);
    }
}