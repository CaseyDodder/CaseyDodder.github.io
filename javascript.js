$(document).ready(function () {
  let currentSliderClass = '.default-slider';
  // Racing Game Object
  const racingGameObject = {
    gameTitle: 'Retro Rally!',
    heroImage:'images/retro-rally/main-image.jpg',
    actionIcon: false,
    sliderClass: '.default-slider',
    sliderImages: [
      'images/retro-rally/compressed/mushroom-track.jpg',
      'images/retro-rally/compressed/island-track.jpg',
      'images/retro-rally/compressed/farm-track.jpg',
      'images/retro-rally/compressed/snow-track.jpg',
      'images/retro-rally/compressed/cemetary-track.jpg',
      'images/retro-rally/compressed/lighthouse-track.jpg',
      'images/retro-rally/compressed/volcano-track.jpg',
      'images/retro-rally/compressed/construction-track.jpg',
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
    aboutGame: "Get ready to embark on a nostalgic journey back to the golden era of arcade gaming with Retro Rally! This top-down racing game pays homage to the classic arcade racers of yesteryears, offering an adrenaline-pumping experience that will have you hooked from the moment you hit the accelerator.</br></br>",
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
    videoClass: '#youtubePlayer',
    videoUrl: 'https://www.youtube.com/embed/td54iLMy4VY?si=-YD87rQy9f1fnLYz',
    socialButtons: [
      [
        `<img src="images/retro-rally/steam-wishlist.jpg" style="max-width: 150px;">`,
      ],
      [
        `<a href="https://twitter.com/cuscutagames"><i class="fab fa-twitter"></i></a>`,
      ],
    ]
  };
  // Disc Golf Game Object
  const discGolfGameObject = {
    gameTitle: 'Disc Golf Arcade',
    heroImage: 'images/disc-golf-arcade/main-image.png',
    actionIcon: true,
    sliderClass: '.disc-golf-game-slider',
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
    videoClass: '.disc-golf-game-video',
    videoUrl: 'https://www.youtube.com/embed/coHIXJtTT3k?si=TBuEHwj5ldHaxJ9O',
    socialButtons: [
      [
        `<div><a href='https://play.google.com/store/apps/details?id=com.Cuscuta.DiscGolfArcade&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' style="max-width: 150px;"/></a></div>`,
      ],
      [
        `<a href="https://twitter.com/cuscutagames"><i class="fab fa-twitter"></i></a>`,
      ],
    ]
  };

  $('.game-menu-link').on('click', function() {
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
      $('.about-game__container').append(`
        <div class="game-mode-dropdown">
          <div class="game-mode-dropdown--innner">
            ${value[2]}
            <span class="tab-text game-mode-title">${value[0]}</span>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="game-mode-dropdown-copy hidden">${value[1]}</div>
        </div>`
      );
    });

    // VIDEO
    $('.video-container div').each(function () {
      let youtubeIframe = $('.youtube-video-iframe');
      youtubeIframe.attr('src', gameObject.videoUrl);
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

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Function to load YouTube videos
  function loadYouTubeVideos() {
    $(".youtube-container iframe[data-src]").each(function() {
      if (isElementInViewport(this)) {
        var videoUrl = $(this).attr("data-src");
        $(this).attr("src", videoUrl);
        $(this).removeAttr("data-src");
      }
    });
  }

  // Add an event listener to load videos when the page is scrolled
  $(window).on("scroll", loadYouTubeVideos);
  $(window).on("resize", loadYouTubeVideos);

  // YOUTUBE
  // function onYouTubeIframeAPIReady() {
  //   var player;
  //   player = new YT.Player('youtubePlayer', {
  //     videoId: 'td54iLMy4VY', // YouTube Video ID
  //     // videoId: 'coHIXJtTT3k', // YouTube Video ID
  //     width: 560,               // Player width (in px)
  //     height: 316,              // Player height (in px)
  //     playerVars: {
  //       autoplay: 0,        // Auto-play the video on load
  //       controls: 1,        // Show pause/play buttons in player
  //       showinfo: 0,        // Hide the video title
  //       modestbranding: 1,  // Hide the Youtube Logo
  //       loop: 1,            // Run the video in a loop
  //       fs: 0,              // Hide the full screen button
  //       cc_load_policy: 0, // Hide closed captions
  //       iv_load_policy: 3,  // Hide the Video Annotations
  //       autohide: 0         // Hide video controls when playing
  //     },
  //     events: {
  //       onReady: function(e) {
  //         e.target.mute();
  //       }
  //     }
  //   });
  // }

});