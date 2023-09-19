$(document).ready(function () {
  let currentSliderClass = '.default-slider';
  // Racing Game Object
  const racingGameObject = {
    gameTitle: 'Retro Rush!',
    heroImage: null,
    actionIcon: false,
    sliderClass: '.racing-game-slider',
    sliderImages: [
      'images/racing-game/compressed/mushroom-track.jpg',
      'images/racing-game/compressed/island-track.jpg',
      'images/racing-game/compressed/farm-track.jpg',
      'images/racing-game/compressed/snow-track.jpg',
      'images/racing-game/compressed/cemetary-track.jpg',
      'images/racing-game/compressed/lighthouse-track.jpg',
      'images/racing-game/compressed/volcano-track.jpg',
      'images/racing-game/compressed/construction-track.jpg',
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
    aboutGame: "Get ready to embark on a nostalgic journey back to the golden era of arcade gaming with Retro Rush! This top-down racing game pays homage to the classic arcade racers of yesteryears, offering an adrenaline-pumping experience that will have you hooked from the moment you hit the accelerator.</br></br>",
    features: [
      [
        "Local Co-op",
        "Grab your friends and family for some retro-inspired racing fun. With local co-op support, you can race head-to-head in Circuit Mode. Experience the joy of multiplayer arcade action on the same screen, just like the good old days.",
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
        "Test your mettle in this high-stakes mode, where you'll face off against a relentless horde of AI racers. The pressure is on as you attempt to survive wave after wave of increasingly difficult opponents while collecting power-ups to stay ahead.",
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
    heroImage: 'images/disc-golf-arcade/compressed/main-image.png',
    actionIcon: true,
    sliderClass: '.default-slider',
    sliderImages: [
      'images/disc-golf-arcade/compressed/woods-2.jpg',
      'images/disc-golf-arcade/compressed/farm.jpg',
      'images/disc-golf-arcade/compressed/mountains.jpg',
      'images/disc-golf-arcade/compressed/beach.jpg',
      'images/disc-golf-arcade/compressed/city-2.jpg',
      'images/disc-golf-arcade/compressed/dark-woods.jpg',
      'images/disc-golf-arcade/compressed/zombie.jpg',
    ],
    iconAndTextCopy: [
      [
        `<i class="fas fa-gamepad"></i>`,
        '100+ holes',
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
    features: [
      [
        "Hole Challenges",
        "Immerse yourself in the game as you aim to conquer hole-specific objectives. Whether it's escaping the clutches of jumping sharks or navigating through turbulent tornadoes, each hole brings a new, exciting challenge to master.",
        `<i class="fas fa-users"></i>`,
      ],
      [
        "Stat Tracking",
        "Track your best round on each course, count your total aces, work to improve your average course score and aim for the most aces in a single round.",
        `<i class="fas fa-stopwatch"></i>`,
      ],
      [
        "Gameplay Mechanics",
        "Engage in gameplay reminiscent of puzzle-solving as you decipher the optimal trajectory for each throw. Every shot requires careful planning and precision. Navigate the unpredictable wind patterns that affect your disc's flight path. Factor in wind speed and direction to make those critical shots. Embrace the versatility of your disc by mastering the art of ground bounces. Bounce your disc strategically to navigate tricky terrains and achieve those hard-to-reach targets.",
        `<i class="fas fa-flag-checkered"></i>`,
      ],
      [
        "Unique Challenges",
        "Navigate unpredictable hazards like jumping sharks, tornadoes, and more, while conquering hole-specific objectives and unlocking content along the way.",
        `<i class="fas fa-car-crash"></i>`,
      ],
    ],
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
    // $('.mic-container').css('marginTop', '-80px');
    if (gameObject.heroImage) {
      $('.hero-container-img').attr('src', gameObject.heroImage)
    }
    else {
      $('.hero-container-img').addClass('hidden')
      // $('.mic-container').css('marginTop', 'initial');
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
    gameObject.features.forEach(function (value) {
      console.log(value);
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
      let racingGameVideo = $('.racing-game-video');
      $('#youtubePlayer').addClass('hidden');
      racingGameVideo.addClass('hidden');
      $(gameObject.videoClass).removeClass('hidden');
      if (gameObject.videoClass === ".racing-game-video" && !racingGameVideo.attr('data-loaded')) {
        let racingGameIframe = $('.racing-game-iframe');
        const iframeSrc = $(racingGameIframe).attr('src');
        $('.racing-game-iframe').attr('src', iframeSrc)
        $(racingGameVideo).attr('data-loaded', 'true');
      }
    });

    // FOOTER
    $(".footer-social-button").each(function (index, value) {
      const socialHtml = gameObject.socialButtons[index] ? gameObject.socialButtons[index] : '';
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