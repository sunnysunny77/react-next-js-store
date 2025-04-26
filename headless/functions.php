<?php

if (!isset($content_width)) {

    $content_width = 1920;
}

function disable_wp_frontend() {

    if (is_admin() || strpos($_SERVER['REQUEST_URI'], '/wp-json/') === 0) {

        return;
    }
    wp_redirect(home_url(), 301);
    exit;
}
add_action('template_redirect', 'disable_wp_frontend');

function boot_on_theme_activation()
{

    function boot_remove_post($page_path, $output, $post_type)
    {

        $post = get_page_by_path($page_path, $output, $post_type);

        if ($post) {

            wp_delete_post($post->ID, true);
        }
    }

    boot_remove_post('hello-world', 'OBJECT', 'post');

    boot_remove_post('Sample Page', 'OBJECT', 'page');

    boot_remove_post('Privacy Policy', 'OBJECT', 'page');

    if (!get_post_status(256)) {

        $page = array(
            'import_id'      =>  256,
            'post_title'     => 'Home',
            'post_type'      => 'page',
            'post_name'      => 'front_page',
            'post_status'    => 'publish',
            'page_template'  => 'front_page.php',
        );
        $id = wp_insert_post($page);
    }

    if (!get_post_status(257)) {

        $page = array(
            'import_id'      =>  257,
            'post_title'     => 'Store',
            'post_type'      => 'page',
            'post_name'      => 'cart_page',
            'post_status'    => 'publish',
            'page_template'  => 'cart_page.php',
        );
        $id = wp_insert_post($page);
    }

    if (!get_post_status(258)) {

        $page = array(
            'import_id'      =>  258,
            'post_title'     => 'Sign in',
            'post_type'      => 'page',
            'post_name'      => 'authentication_page',
            'post_status'    => 'publish',
            'page_template'  => 'authentication_page.php',
        );
        $id = wp_insert_post($page);
    }

    if (!get_post_status(259)) {

        $page = array(
            'import_id'      =>  259,
            'post_title'     => 'Options',
            'post_type'      => 'page',
            'post_name'      => 'options_page',
            'post_status'    => 'publish',
            'page_template'  => 'options_page.php',
        );
        $id = wp_insert_post($page);
    }

	update_option( 'uploads_use_yearmonth_folders', 0 );
}
add_action('after_switch_theme', 'boot_on_theme_activation');

function remove_appearance_menu() {

    if (!current_user_can('administrator')) {
        remove_menu_page('themes.php');
        remove_menu_page('edit-comments.php');
        remove_menu_page('themes.php');
    }
}
add_action('admin_menu', 'remove_appearance_menu');

add_filter( 'pre_option_upload_path', function( $upload_path ) {

    return  get_template_directory() . '/files' ;
});

add_filter( 'pre_option_upload_url_path', function( $upload_url_path ) {

    return get_template_directory_uri() . '/files';
});

function my_acf_save_post( $post_id ) {

	$post_title = strip_tags(get_field('post_title', $post_id));
	
	if ( $post_title && $post_title !== get_post_field( 'post_title', $post_id )) {
		wp_update_post( array(
			'ID' => $post_id,
			'post_title' => $post_title,
			'post_name' => sanitize_title($post_title),
		));
	}
}
add_action('acf/save_post', 'my_acf_save_post');

function my_own_mime_types( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'my_own_mime_types' );

function cptui_register_my_cpts_post_item() {

	/**
	 * Post Type: Post Items.
	 */

	$labels = [
		"name" => esc_html__( "Post Items", "custom-post-type-ui" ),
		"singular_name" => esc_html__( "Post Item", "custom-post-type-ui" ),
	];

	$args = [
		"label" => esc_html__( "Post Items", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"rest_namespace" => "wp/v2",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"can_export" => false,
		"rewrite" => [ "slug" => "post_item", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail" ],
		"show_in_graphql" => true,
		"graphql_single_name" => "PostItem",
		"graphql_plural_name" => "PostItems",
	];

	register_post_type( "post_item", $args );
}

add_action( 'init', 'cptui_register_my_cpts_post_item' );


function cptui_register_my_cpts_post_slider() {

	/**
	 * Post Type: Post Sliders.
	 */

	$labels = [
		"name" => esc_html__( "Post Sliders", "custom-post-type-ui" ),
		"singular_name" => esc_html__( "Post Slider", "custom-post-type-ui" ),
	];

	$args = [
		"label" => esc_html__( "Post Sliders", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"rest_namespace" => "wp/v2",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"can_export" => false,
		"rewrite" => [ "slug" => "post_slider", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail" ],
		"show_in_graphql" => true,
		"graphql_single_name" => "PostSlider",
		"graphql_plural_name" => "PostSliders",
	];

	register_post_type( "post_slider", $args );
}
add_action( 'init', 'cptui_register_my_cpts_post_slider' );