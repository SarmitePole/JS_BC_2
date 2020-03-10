<h3>There sits very important Articles</h3>
<ul>
<?php
foreach ($articles as $article) {
    echo '<li><a href="?page=article&id=' . $article->id . '">' . $article->title . '</a></li>';
    echo '<p>' . $article->intro . '</p>';

}
?>
</ul>