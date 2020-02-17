<h2>
This is POSTS!
</h2>

<?php 
    // $posts = PostsRepository::getPosts();

    // dd($posts);
    // Šitā nevar, jo tad sanāk ka šī View daļa runāja pa taisno ar Models..tā nedrīkst - jārunā caur Controller
    //  dd($posts);
?>

<ul>

    <?php 
        foreach ($posts as $post) {
            echo '<li><a href="?page=post&id=' . $post['title'] . '</li>';
        }

    ?>
</ul>





