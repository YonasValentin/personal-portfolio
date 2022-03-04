<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package wp-yonas-personal-portefolio
 */

get_header();
?>

<main id="primary" class="site-main">
    <section class="hero-section"></section>
    <section class="about-section"></section>
    <section class="services-section"></section>
    <section class="portfolio-section"></section>
    <section class="blog-section"></section>
    <section class="contact-section">
        <div class="contact-section__container">
            <h2 class="contact-section__heading">&lt;Kontakt&gt;</h2>
            <p class="contact-section__sub-heading">Du er blot få klik væk fra en hyggelig samtale</p>
            <form id="contact-form" novalidate>
                <div class="input-wrapper fname">
                    <input type="text" id="fname" name="firstname" placeholder="Indtast dit navn..">
                </div>

                <div class="input-wrapper email">
                    <input type="text" id="email" name="email" placeholder="Indtast din e-mail..">
                </div>

                <div class="input-wrapper subject">
                    <input type="text" id="subject" name="subject" placeholder="Emne..">
                </div>

                <div class="textarea-wrapper message">
                    <textarea id="message" name="message" placeholder="Beskrivelse.." style="height:200px"></textarea>
                </div>

                <div class="submit-wrapper">
                    <input type="submit" value="Send">
                </div>
            </form>
        </div>
    </section>





    <section class="post-frontpage"></section>

</main><!-- #main -->

<?php
get_footer();