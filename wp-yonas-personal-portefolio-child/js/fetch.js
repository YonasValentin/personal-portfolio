const wpUrl =
  'http://wppersonalportefolio.local/wp-json/wp/v2/posts/?acf_format=standard';

async function getPostsFromWp() {
  try {
    const response = await fetch(wpUrl);

    const data = await response.json();
    appendPosts(data);
  } catch (err) {
    console.log(err);
  }
}
getPostsFromWp();

function appendPosts(posts) {
  for (const post of posts) {
    if (post.id === 437) {
      document.querySelector('.hero-section').innerHTML +=
        /*html*/
        `
          <article class="hero-section__container">
            <h1 class="hero-section__first-heading">${post.acf.herosectionfirstheading}</h1>
            <p class="hero-section__secound-heading">${post.acf.herosectionsecoundheading}</p>
            <p class="hero-section__third-heading">${post.acf.herosectionthirdheading}</p>
            <figure class="hero-section__image-container">
            <img src="${post.acf.herosectionimg}" />
            </figure>
            <div class="hero-section__btn-container">
            <button class="hero-section__prim-button contact">${post.acf.herosectionprimbutton}</button>
            <button class="hero-section__sec-button learn">${post.acf.herosectionsecbutton}</button>
            </div>
          </article>
            `;
    }

    if (post.id === 439) {
      document.querySelector('.about-section').innerHTML +=
        /*html*/
        `
      <article class="about-section__container">
        <h1 class="about-section__first-heading">${post.acf.aboutsectionfirstheading}</h1>
        <p class="about-section__text-area">${post.acf.aboutsectiontextarea}</p>
        <figure class="about-section__img-container">
          <img src="${post.acf.aboutsectionbigsvg}">
        </figure>
        <div class="about-section__skills-container">
          <h2 class="about-section__skills-heading">${post.acf.aboutskillsheading}</h2>
            <ul class="about-section__skill-container">
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill1}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill2}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill3}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill4}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill5}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill6}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill7}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill8}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill9}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill10}</li>
              <li class="about-section__skill"><i class="fa fa-angle-double-right"></i>${post.acf.skills.skill11}</li>
            </ul>
          <button class="about-section__button learn">${post.acf.aboutsectionbutton}</button>
        </div>
      </article>
      `;
    }

    if (post.id === 441) {
      document.querySelector('.services-section').innerHTML +=
        /*html */
        `
      <article class="services-section__container">
        <h1 class="services-section__heading">${post.acf.servicessectionheading}</h1>
        <p class="services-section__heading-textarea">${post.acf.servicessectionheadingtextarea}</p>

        <div class="services-section__services-container">
          <div class="services-section__service-container">
            <i class="${post.acf.service1.serviceicon1}"></i>
            <h2>${post.acf.service1.serviceheading1}</h2>
            <p>${post.acf.service1.servicetextarea1}</p>
          </div>

          <div class="services-section__service-container">
            <i class="${post.acf.service2.serviceicon2}"></i>
            <h2>${post.acf.service2.serviceheading2}</h2>
            <p>${post.acf.service2.servicetextarea2}</p>
          </div>

          <div class="services-section__service-container">
            <i class="${post.acf.service3.serviceicon3}"></i>
            <h2>${post.acf.service3.serviceheading3}</h2>
            <p>${post.acf.service3.servicetextarea3}</p>
          </div>

          <div class="services-section__service-container">
            <i class="${post.acf.service4.serviceicon4}"></i>
            <h2>${post.acf.service4.serviceheading4}</h2>
            <p>${post.acf.service4.servicetextarea4}</p>
          </div>
        </div>

        <button class="services-section__button contact">${post.acf.servicessectionbutton}</button>
      </article>
      `;
    }

    if (post.id === 443) {
      document.querySelector('.portfolio-section').innerHTML +=
        /* html */
        `
      <article class="portfolio-section__container">
        <h2 class="portfolio-section__heading">${post.acf.portfolioheading}</h2>
        <p class="portfolio-section__textarea">${post.acf.portfoliotextarea}</p>
        <div class="portfolio-section__cards-container">
          <div class="portfolio-section__card">
            <h2 class="portfolio-section__title"><i class="fa fa-code"></i>${post.acf.portfoliocards.portfoliocardtitle1}</h2>
            <figure class="portfolio-section__img-container">
              <img src="${post.acf.portfoliocards.portfoliocardimg1}">
            </figure>
            <p class="portfolio-section__card-heading">${post.acf.portfoliocards.portfoliocardheading1}</p>
            <p class="portfolio-section__card-textarea">${post.acf.portfoliocards.portfoliocardtextarea1}</p>
            <button class="portfolio-section__card-button">${post.acf.portfoliocards.portfoliocardbutton1}<i class="fa fa-arrow-right"></i></button>
          </div>

          <div class="portfolio-section__card">
          <h2 class="portfolio-section__title"><i class="fa fa-code"></i>${post.acf.portfoliocards.portfoliocardtitle2}</h2>
          <figure class="portfolio-section__img-container">
            <img src="${post.acf.portfoliocards.portfoliocardimg2}">
          </figure>
          <p class="portfolio-section__card-heading">${post.acf.portfoliocards.portfoliocardheading2}</p>
          <p class="portfolio-section__card-textarea">${post.acf.portfoliocards.portfoliocardtextarea2}</p>
          <button class="portfolio-section__card-button">${post.acf.portfoliocards.portfoliocardbutton2}<i class="fa fa-arrow-right"></i></button>
        </div>

        <div class="portfolio-section__card">
        <h2 class="portfolio-section__title"><i class="fa fa-code"></i>${post.acf.portfoliocards.portfoliocardtitle3}</h2>
        <figure class="portfolio-section__img-container">
          <img src="${post.acf.portfoliocards.portfoliocardimg3}">
        </figure>
        <p class="portfolio-section__card-heading">${post.acf.portfoliocards.portfoliocardheading3}</p>
        <p class="portfolio-section__card-textarea">${post.acf.portfoliocards.portfoliocardtextarea3}</p>
        <button class="portfolio-section__card-button">${post.acf.portfoliocards.portfoliocardbutton3}<i class="fa fa-arrow-right"></i></button>
        </div>
        </div>
        <button class="portfolio-section__button contact">${post.acf.portfoliobutton}</button>
      </article>
      `;
    }

    if (post.id === 554) {
      document.querySelector('.blog-section').innerHTML +=
        /*html */
        `
      <article class="blog-section__container">
      <h2 class="blog-section__heading">${post.acf.blogheading}</h2>
      <p class="blog-section__textarea">${post.acf.blogtextarea}</p>
      <div class="blog-section__cards-container">
        <div class="blog-section__card">
          <figure class="blog-section__img-container">
            <img src="${post.acf.blogcards.blogcardimg1}">
          </figure>
          <p class="blog-section__card-heading">${post.acf.blogcards.blogcardheading1}</p>
          <p class="blog-section__card-textarea">${post.acf.blogcards.blogcardtextarea1}</p>
          <button class="blog-section__card-button">${post.acf.blogcards.blogcardbutton1}<i class="fa fa-arrow-right"></i></button>
        </div>

        <div class="blog-section__card">
        <figure class="blog-section__img-container">
          <img src="${post.acf.blogcards.blogcardimg2}">
        </figure>
        <p class="blog-section__card-heading">${post.acf.blogcards.blogcardheading2}</p>
        <p class="blog-section__card-textarea">${post.acf.blogcards.blogcardtextarea2}</p>
        <button class="blog-section__card-button">${post.acf.blogcards.blogcardbutton2}<i class="fa fa-arrow-right"></i></button>
      </div>

      <div class="blog-section__card">
      <figure class="blog-section__img-container">
        <img src="${post.acf.blogcards.blogcardimg3}">
      </figure>
      <p class="blog-section__card-heading">${post.acf.blogcards.blogcardheading3}</p>
      <p class="blog-section__card-textarea">${post.acf.blogcards.blogcardtextarea3}</p>
      <button class="blog-section__card-button">${post.acf.blogcards.blogcardbutton3}<i class="fa fa-arrow-right"></i></button>
      </div>
      </div>
      <button class="blog-section__button contact">${post.acf.blogbutton}</button>
      </article>
      `;
    }
  }
}
