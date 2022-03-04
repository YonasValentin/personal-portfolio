<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );

if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'css/style.css', array(  ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css', 10 );

// END ENQUEUE PARENT ACTION

// ADDING CUSTOM SCRIPTS

function custom_scripts() {
    wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/fetch.js', array( 'jquery' ),'',true );
    wp_enqueue_script( 'mobilemenu-js', get_stylesheet_directory_uri() . '/js/mobilemenu.js', array( 'jquery' ), '', true);
    wp_enqueue_script( 'scroll-js', get_stylesheet_directory_uri() . '/js/scroll.js', array( 'jquery' ), '', true);
    wp_enqueue_script( 'form-js', get_stylesheet_directory_uri() . '/js/form.js', array( 'jquery'), '', true );

}
add_action( 'wp_enqueue_scripts', 'custom_scripts' );

// END CUSTOM SCRIPTS

// ADDING STYLES

function custom_styles() {
    wp_enqueue_style( 'stylesheet', get_template_directory_uri() . 'style.css',true,'1.1','all');
    wp_enqueue_style( 'google-fonts-roboto-mono', 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap', true );
    wp_enqueue_style( 'google-fonts-Bungee', 'https://fonts.googleapis.com/css2?family=Bungee+Outline&display=swap', true );
    wp_enqueue_style( 'custom-fa', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', true );
}
add_action( 'wp_enqueue_scripts', 'custom_styles');

// END CUSTOM STYLES

// ADDING FEATURED IMAGE TO JSON

add_action( 'rest_api_init', 'add_thumbnail_to_JSON' );
function add_thumbnail_to_JSON() {
//Add featured image
register_rest_field( 'post',
    'image_src', //NAME OF THE NEW FIELD TO BE ADDED - you can call this anything
    array(
        'get_callback'    => 'get_image_src',
        'update_callback' => null,
        'schema'          => null,
         )
    );
}

function get_image_src( $object, $field_name, $request ) {
    $size = 'large'; // Change this to the size you want | 'medium' / 'large'
    $feat_img_array = wp_get_attachment_image_src($object['featured_media'], $size, true);
    return $feat_img_array[0];
}

// END FEATURED IMAGE TO JSON
  
// register a mobile menu
function wdm_register_mobile_menu() {
    add_theme_support( 'nav-menus' );
    register_nav_menus( array('mobile-menu' => __( 'Mobile Menu', 'wdm' )) );
}
add_action( 'init', 'wdm_register_mobile_menu' );