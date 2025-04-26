<main id="main" class="container">

    <?php if (have_posts()) { ?>

        <?php while (have_posts()) { the_post(); ?>

            <?php if (has_post_thumbnail()) {  echo '<div role="img" aria-label="post_thumbnail" style="background-image: url(' . get_the_post_thumbnail_url() . ');"></div>'; } ?>

            <h1> <?php the_title(); ?></h1>

            <?php the_content() ?>

        <?php } ?>

    <?php } ?>

</main>