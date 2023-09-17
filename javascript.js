$(document).ready(function () {
  let currentSliderClass = '.default-slider';
  // Racing Game Object
  const racingGameObject = {
    gameTitle: 'Racing Game',
    heroImage: null,
    actionIcon: false,
    sliderClass: '.racing-game-slider',
    sliderImages: [
      'images/racing-game/mushroom-track.png',
      'images/racing-game/island-track.png',
      'images/racing-game/farm-track.png',
      'images/racing-game/snow-track.png',
      'images/racing-game/cemetary-track.png',
      'images/racing-game/lighthouse-track.png',
      'images/racing-game/volcano-track.png',
      'images/racing-game/construction-track.png',
    ],
    iconAndTextCopy: [
      [
        `<i class="fas fa-gamepad"></i>`,
        '3 Game modes',
      ],
      [
        `<i class="fas fa-layer-group"></i>`,
        '16 Unique Tracks',
      ],
      [
        `<i class="fas fa-users"></i>`,
        'Local Co-op',
      ],
    ],
    aboutGame: "Get ready to embark on a nostalgic journey back to the golden era of arcade gaming with RetroRush! This top-down racing game pays homage to the classic arcade racers of yesteryears, offering an adrenaline-pumping experience that will have you hooked from the moment you hit the accelerator.</br></br>",
    gameModes: [
      [
        "Local Co-op",
        "Grab your friends and family for some retro-inspired racing fun. With local co-op support, you can race head-to-head or team up in Gauntlet Mode. Experience the joy of multiplayer arcade action on the same screen, just like the good old days.",
        `<i class="fas fa-users"></i>`,
      ],
      [
        "Time Trial Mode",
        "Race against the clock as you navigate a series of challenging tracks. Precision and speed are the keys to victory in this mode, where shaving off milliseconds is the ultimate goal.",
        `<i class="fas fa-stopwatch"></i>`,
      ],
      [
        "Circuit Mode",
        "Immerse yourself in the world of championship racing as you compete in a thrilling series of circuits. Take on AI opponents in a fierce battle for first place. With 16 unique tracks and 16 reverse tracks, every race presents a new challenge, requiring mastery of both offensive and defensive driving skills.",
        `<i class="fas fa-flag-checkered"></i>`,
      ],
      [
        "Gauntlet Mode",
        "Test your mettle in this high-stakes mode, where you'll face off against a relentless horde of AI racers. The pressure is on as you attempt to survive wave after wave of opponents while collecting power-ups to stay ahead.",
        `<i class="fas fa-car-crash"></i>`,
      ],
    ],
    videoClass: '.racing-game-video',
    socialButtons: [
      [
        `<img src="images/racing-game/steam-wishlist.jpg" style="max-width: 150px;">`,
      ],
      [
        `<a href="https://twitter.com/CuscutaOfficial"><i class="fab fa-twitter"></i></a>`,
      ],
    ]
  };
  // Disc Golf Game Object
  const discGolfGameObject = {
    gameTitle: 'Disc Golf Arcade',
    heroImage: 'images/disc-golf-arcade/main-image.png',
    actionIcon: true,
    sliderClass: '.default-slider',
    sliderImages: [
      'images/disc-golf-arcade/woods-2.jpg',
      'images/disc-golf-arcade/farm.jpg',
      'images/disc-golf-arcade/mountains.jpg',
      'images/disc-golf-arcade/beach.jpg',
      'images/disc-golf-arcade/city-2.jpg',
      'images/disc-golf-arcade/dark-woods.jpg',
      'images/disc-golf-arcade/zombie.jpg',
    ],
    iconAndTextCopy: [
      [
        `<i class="fas fa-gamepad"></i>`,
        '100+ challenging holes to master',
      ],
      [
        `<i class="fas fa-layer-group"></i>`,
        '12 unique courses',
      ],
      [
        `<i class="fas fa-music"></i>`,
        'Retro soundtrack',
      ],
    ],
    aboutGame: "With intuitive controls and 100+ challenging levels, you'll be able to master your virtual disc throwing skills. Immerse yourself with unique 2D physics and dynamic environments, including forests, farms, beaches, space and the matrix! With each level offering a unique challenge, you'll be able to test your skills and improve your technique. Download now and join the fun!",
    gameModes: [],
    videoClass: '#youtubePlayer',
    socialButtons: [
      [
        `<div><a href='https://play.google.com/store/apps/details?id=com.Cuscuta.DiscGolfArcade&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' style="max-width: 150px;"/></a></div>`,
      ],
      [
        `<a href="https://twitter.com/CuscutaOfficial"><i class="fab fa-twitter"></i></a>`,
      ],
    ]
  };

  $('.game-menu-link').on('click', function() {
    console.log($(this).attr('class'));
    if ($(this).hasClass('racing-game-menu-btn')) {
      gameMenuItemSwitch('racing-game');
    }
    else if ($(this).hasClass('disc-golf-arcade-menu-btn')) {
      gameMenuItemSwitch('disc-golf-game');
    }
  });

  function gameMenuItemSwitch (gameName) {
    switch (gameName) {
      case 'racing-game':
        populateGameItems(racingGameObject);
        break;
      case 'disc-golf-game':
        populateGameItems(discGolfGameObject);
        break;
      default:
        break;
    }
  }

  function populateGameItems (gameObject) {
    // Hero.
    $('.hero-container-img').removeClass('hidden');
    $('.mic-container').css('marginTop', '-80px');
    if (gameObject.heroImage) {
      $('.hero-container-img').attr('src', gameObject.heroImage)
    }
    else {
      $('.hero-container-img').addClass('hidden')
      $('.mic-container').css('marginTop', 'initial');
    }
    $('.game-header-title').html(gameObject.gameTitle);
    if (gameObject.actionIcon) {
      $('.hero-action-icon').show();
    }
    else {
      $('.hero-action-icon').hide();
    }
    // Slick Slider.
    $(currentSliderClass).addClass('hidden');
    $(currentSliderClass).slick('unslick');
    currentSliderClass = gameObject.sliderClass;
    $(currentSliderClass).removeClass('hidden');
    if ($(currentSliderClass).hasClass('slick-initialized')) {
      $(currentSliderClass).slick();
    }
    else {
      initializeSlickSlider(currentSliderClass);
    }

    // Icon & Text.
    const iconTextArray = gameObject.iconAndTextCopy;
    $('.mic-img-and-copy-container').each(function (index) {
      const elements = iconTextArray[index];
      $(this).html(`${elements[0]}<div class="mic-img-and-copy-container__copy">${elements[1]}</div>`);
    });
    $('.about-game .copy').html(gameObject.aboutGame);

    // About Game Section.
    $('.about-game__container').empty();
    gameObject.gameModes.forEach(function (value) {
      $('.about-game__container').append(`
        <div class="game-mode-dropdown">
          <div class="game-mode-dropdown--innner">
            ${value[2]}
            <span class="game-mode-title">${value[0]}</span>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="game-mode-dropdown-copy hidden">${value[1]}</div>
        </div>`
      );
    });

    // VIDEO
    $('.video-container div').each(function () {
      $('#youtubePlayer').addClass('hidden');
      $('.racing-game-video').addClass('hidden');
      $(gameObject.videoClass).removeClass('hidden');
      // $(this).hide();
      // $('#youtubePlayer').addClass('hidden');
    });

    // FOOTER
    $(".footer-social-button").each(function (index, value) {
      console.log(index);
      console.log($(this).html());
      console.log("looping buttons");
      const socialHtml = gameObject.socialButtons[index] ? gameObject.socialButtons[index] : '';
      console.log(socialHtml);
      $(this).html(socialHtml);
    });
  }

  // SLICK SLIDER
  function initializeSlickSlider (classToSlick) {
    $(classToSlick).slick({
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoPlay: true,
      variableWidth: true,
      // variableWidth: true,
      centerMode: true,
      // centerPadding: "20px",
      // centerPadding: "50px",
      adaptiveHeight: true,
      prevArrow: '<span type="span" class="slick-prev"><i class="fas fa-arrow-left"></i></span>',
      nextArrow: '<span type="span" class="slick-next"><i class="fas fa-arrow-right"></i></span>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  initializeSlickSlider('.default-slider');

  $('body').on('click', '.game-mode-dropdown', function () {
    let arrowIcon = $(this).find('.fa-chevron-down');
    let dropdownCopy = $(this).find(".game-mode-dropdown-copy");
    if (!dropdownCopy.hasClass('hidden')) {
      dropdownCopy.addClass('hidden');
      $('.game-mode-dropdown .fa-chevron-down').css('transform', 'initial');
    }
    else {
      $('.game-mode-dropdown .fa-chevron-down').css('transform', 'initial');
      $('.game-mode-dropdown-copy').addClass('hidden');
      // element.css('transform', 'rotate(180deg)');
      $(this).find(".game-mode-dropdown-copy").removeClass('hidden');
      arrowIcon.css('transform', 'rotate(180deg)');
    }
  });
});