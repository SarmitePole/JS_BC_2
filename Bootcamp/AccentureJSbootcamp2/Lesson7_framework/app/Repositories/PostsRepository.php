<?php

class PostsRepository
{
    public static function getPosts(): array 
    {
        $query = DB::$connection->query("SELECT * FROM posts");
        // // dd(__DIR__);
        // $dataJson = file_get_contents(__DIR__ . '/../data/posts.json');

        // $posts = json_decode($dataJson, true);
        // json failus tagad var izdzēst - viņu funkciju pilda Query

        $output = [];
        while ($post = $query->fetchObject('Post')) {
            $output[] = $post;
        }
        
        return $output;
    }

    public static function getPost(int $id): ?Post
    {
        // $query = DB::$connection->query("SELECT * FROM posts WHERE id = $id");
        // NEKAD, NEKAD nelikt $id vai citu $ iekš $query funkcijas, jo tad var uztaisīt SQL injekcijas, kad kāds DROP TABLE sev mūsu datu bāzi. Jātaisa SQL prepaired statements. 
        // labāk jarakstīt šitā

        // $query = DB::$connection->prepare("SELECT * FROM posts WHERE id = ?");
        // $query->execute([$id]);

        $query = DB::$connection->prepare("SELECT * FROM posts WHERE id = :id");
        $query->execute(['id' =>$id]);

        
        $post = $query->fetchObject('Post');
        // $posts = self::getPosts(); //Šitā dabū visus Posts
        // foreach ($posts as $post) {
        //     if ($post->id == $id) {
        //         return $post;
        //     }
        // }


        if(!$post) {
            return null;
        }

        // $postObj = new Post();
        // $postObj->id = $post['id'];
        // $postObj->title = $post['title'];
        // $postObj->text = $post['text'];

        return $post;
    }

}