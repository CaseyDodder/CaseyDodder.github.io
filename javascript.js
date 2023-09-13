$(document).ready(function () {
  let currentSliderClass = '.default-slider';
  const racingGameObject = {
    gameTitle: 'Racing Game',
    heroImage: 'images/racing-game/woods-track.png',
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
      '3 Game modes including Circuit, Gauntlet and Time Trial.',
      '16 Tracks',
      'Local Co-op circuit mode',
    ],
    aboutGame: "about game text",
  };
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
      '100+ challenging holes to master',
      '12 unique courses',
      'Retro soundtrack',
    ],
    aboutGame: "With intuitive controls and 100+ challenging levels, you'll be able to master your virtual disc throwing skills. Immerse yourself with unique 2D physics and dynamic environments, including forests, farms, beaches, space and the matrix! With each level offering a unique challenge, you'll be able to test your skills and improve your technique. Download now and join the fun!",
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
    $('.hero-container-img').attr('src', gameObject.heroImage);
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
    $('.mic-img-and-copy-container__copy').each(function (index) {
      $(this).html(iconTextArray[index]);
    });
    $('.about-game .copy').html(gameObject.aboutGame);
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
});