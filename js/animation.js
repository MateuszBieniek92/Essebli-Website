$(function () {

    // devices width    

    const mobile = window.matchMedia("screen and (max-width: 450px)");
    const desktop = window.matchMedia("screen and (min-width: 900px)");
    const tablet = window.matchMedia("screen and (min-width: 451px) and (max-width: 899px)");

    // hamburger 

    const hamburgerBtn = $('.hamburger');
    const navigation = $('.menu');

    function toggleHamburger() {
        hamburgerBtn.toggleClass('change');
    }

    function toggleMenu() {
        if (navigation.css('display') === 'block') {
            navigation.slideUp();
        } else {
            navigation.slideDown().css({
                "display": "block",
                "width": "100vw",
                "margin": "-0.2em 0 0 -2.2em",
                "background": "#118ded"
            });
        }
    }

    hamburgerBtn.on('click', function () {
        toggleHamburger(this);
        toggleMenu();
    });

    // slider section 4 

    const $competencesSlider = $('.competences-slider');
    const $liPos = $competencesSlider.find('li');
    const $liOne = $competencesSlider.children().first();
    const $liTwo = $competencesSlider.children().eq(1);
    const $liThree = $competencesSlider.children().last();
    $position = 0;

    const $leftSliderBtn = $('.left-slider-btn');
    const $rightSliderBtn = $('.right-slider-btn');

    $liOne.fadeIn(1000).css('display', 'inline-block');
    $liTwo.css('display', 'none');
    $liThree.css('display', 'none');

    function slide(auto) {
        if (auto === true) {
            $position++;
            if ($position === 3) {
                $position = 0;
            }
        }
        if (($position) === 0) {
            $liOne.fadeIn(1000).css('display', 'inline-block');
            $liTwo.css('display', 'none');
            $liThree.css('display', 'none');
        } else if (($position) === 1 || ($position) === -2) {
            $liOne.css('display', 'none');
            $liTwo.fadeIn(1000).css('display', 'inline-block');
            $liThree.css('display', 'none');
        } else if (($position) === 2 || ($position) === -1) {
            $liOne.css('display', 'none');
            $liTwo.css('display', 'none');
            $liThree.fadeIn(1000).css('display', 'inline-block');
        }
    }

    function rightButton() {
        const widthNext = $rightSliderBtn.outerWidth();
        time = 500;
        $rightSliderBtn.on('click', function () {
            $position += 1;
            if ($position === 3) {
                $position = 0;
            }
            slide();
        });

    };

    function leftButton() {
        const widthNext = $leftSliderBtn.outerWidth();
        time = 500;
        $leftSliderBtn.on('click', function () {
            $position -= 1;
            if ($position === 3 || $position === -3) {
                $position = 0;
            }
            slide();
            console.log($position);
        });

    };

    // slider section 6 job requirements

    const $jobName = $('.section-six-job-photo'); //.find('h2');
    const $requirementsList = $('.requirements-list'); //.children();

    const $requireLeftBtn = $('.require-left-slider-btn');
    const $requireRightBtn = $('.require-right-slider-btn');
    $jobName.prepend('<h2>Programista Java</h2>');
    $jobName.append('<p>Consentetur adipiscing elit, sed do eiusmod tempor.</p>');
    let tx1 = $('<li>').append('<span>Java</span>');
    let tx2 = $('<li>').append('<span>Oracle Utilities</span>');
    let tx3 = $('<li>').append('<span>MDM Bazy danych</span>');
    let tx4 = $('<li>').append('<span>Kreatywność</span>');
    let tx5 = $('<li>').append('<span>Dbałość o detale</span>');
    let tx6 = $('<li>').append('<span>Terminowość</span>');

    $requirementsList.prepend(tx1, tx2, tx3, tx4, tx5, tx6);

    function clear() {
        $requirementsList.empty();
        $jobName.empty();
    }

    function requireSlide(auto) {
        if (auto === true) {
            $position++;
            if ($position === 3) {
                $position = 0;
            }
        }
        if (($position) === 0) {
            clear();
            $jobName.prepend('<h2>Programista Java</h2>');
            $jobName.append('<p>Consentetur adipiscing elit, sed do eiusmod tempor.</p>');
            tx1 = $('<li>').append('<span>Java</span>');
            tx2 = $('<li>').append('<span>Oracle Utilities</span>');
            tx3 = $('<li>').append('<span>MDM Bazy danych</span>');
            tx4 = $('<li>').append('<span>Kreatywność</span>');
            tx5 = $('<li>').append('<span>Dbałość o detale</span>');
            tx6 = $('<li>').append('<span>Terminowość</span>');

            $requirementsList.prepend(tx1, tx2, tx3, tx4, tx5, tx6);

        } else if (($position) === 1 || ($position) === -2) {
            clear();
            $jobName.prepend('<h2>Junior Front End Developer</h2>');
            $jobName.append('<p>Consentetur adipiscing elit, sed do eiusmod tempor.</p>');
            tx1 = $('<li>').append('<span>HTML</span>');
            tx2 = $('<li>').append('<span>CSS</span>');
            tx3 = $('<li>').append('<span>JavaScript, jQuery</span>');
            tx4 = $('<li>').append('<span>podstawy PHP</span>');
            tx5 = $('<li>').append('<span>SASS, RWD</span>');
            tx6 = $('<li>').append('<span>Wykonanie wypasionej strony takiej jak ta :)</span>');
            $requirementsList.prepend(tx1, tx2, tx3, tx4, tx5, tx6);
        } else if (($position) === 2 || ($position) === -1) {
            clear();
            $jobName.prepend('<h2>Back End Developer</h2>');
            $jobName.append('<p>Consentetur adipiscing elit, sed do eiusmod tempor.</p>');
            tx1 = $('<li>').append('<span>C#</span>');
            tx2 = $('<li>').append('<span>.NET</span>');
            tx3 = $('<li>').append('<span>WCF</span>');
            tx4 = $('<li>').append('<span>Entity</span>');
            tx5 = $('<li>').append('<span>bazy danych</span>');
            tx6 = $('<li>').append('<span>SCRUM</span>');
            $requirementsList.prepend(tx1, tx2, tx3, tx4, tx5, tx6);
        }
    }

    function requireRightButton() {
        const widthNext = $requireRightBtn.outerWidth();
        time = 500;
        $requireRightBtn.on('click', function () {
            $position += 1;
            if ($position === 3) {
                $position = 0;
            }
            requireSlide();
        });

    };

    function requireLeftButton() {
        const widthNext = $requireLeftBtn.outerWidth();
        time = 500;
        $requireLeftBtn.on('click', function () {
            $position -= 1;
            if ($position === 3 || $position === -3) {
                $position = 0;
            }
            requireSlide();

        });

    };

    // form section 7

    const $form = $('.form-bg').find('form').children();
    const $sendBtn = $('.send-btn');

    const $nameInput = $form.first();
    const $mailInput = $form.eq(2);
    const $topicInput = $form.eq(4);
    const $textarea = $form.eq(6);

    const $nameLabel = $form.eq(1);
    const $mailLabel = $form.eq(3);
    const $topicLabel = $form.eq(5);
    const $textLabel = $form.eq(7);

    function resetLabels() {
        $nameLabel.html('');
        $mailLabel.html('');
        $topicLabel.html('');
        $textLabel.html('');
    }


    // input borders

    $nameInput.removeClass('border-input');
    $mailInput.removeClass('border-input');
    $topicInput.removeClass('border-input');
    $textarea.removeClass('border-input');

    $nameInput.on('click', function () {
        $(this).toggleClass('border-input');
        $mailInput.removeClass('border-input');
        $topicInput.removeClass('border-input');
        $textarea.removeClass('border-input');

    });
    $mailInput.on('click', function () {
        $nameInput.removeClass('border-input');
        $topicInput.removeClass('border-input');
        $textarea.removeClass('border-input');
        $(this).toggleClass('border-input');
    });
    $topicInput.on('click', function () {
        $nameInput.removeClass('border-input');
        $mailInput.removeClass('border-input');
        $textarea.removeClass('border-input');
        $(this).toggleClass('border-input');
    });
    $textarea.on('click', function () {
        $nameInput.removeClass('border-input');
        $mailInput.removeClass('border-input');
        $topicInput.removeClass('border-input');
        $(this).toggleClass('border-input');
    });

    // send btn

    $sendBtn.on('click', function () {
        const $nameVal = $nameInput.val();
        const $mailVal = $mailInput.val();
        const $topicVal = $topicInput.val();
        const $textVal = $textarea.val();

        function resetInput() {
            $nameInput.val('');
            $mailInput.val('');
            $topicInput.val('');
            $textarea.val('');
        }

        if ($nameVal.length > 5) {
            if ($mailVal.indexOf("@") > -1) {
                if ($topicVal.length > 3) {
                    if ($textVal.length > 5) {
                        //form send
                        resetLabels();
                        resetInput();
                        $nameInput.css('border', ' 2px solid #cecece');
                        $mailInput.css('border', ' 2px solid #cecece');
                        $topicInput.css('border', ' 2px solid #cecece');
                        $textarea.css('border', ' 2px solid #cecece');
                        $textLabel.css({
                            'color': '#1e93ee',
                            'font-size': '16px',
                            'font-weight': 'bold'
                        }).html('Formularz został wysłany!').fadeOut(4000);
                    } else {
                        resetLabels();
                        $textLabel.html('Podany opis jest za krótki!');
                        $nameInput.css('border', ' 2px solid #cecece');
                        $mailInput.css('border', ' 2px solid #cecece');
                        $topicInput.css('border', ' 2px solid #cecece');
                        $textarea.css('border', '2px solid red');
                    }
                } else {
                    resetLabels();
                    $topicLabel.html('Podany opis tematu jest za krótki!');
                    $nameInput.css('border', ' 2px solid #cecece');
                    $mailInput.css('border', ' 2px solid #cecece');
                    $topicInput.css('border', '2px solid red');
                    $textarea.css('border', ' 2px solid #cecece');
                }
            } else {
                resetLabels();
                $mailLabel.html('Adres e-mail jest nie prawidłowy!');
                $nameInput.css('border', ' 2px solid #cecece');
                $mailInput.css('border', '2px solid red');
                $topicInput.css('border', ' 2px solid #cecece');
                $textarea.css('border', ' 2px solid #cecece');
            }
        } else {
            $nameLabel.html('Podana wartość jest za krótka!');
            $nameInput.css('border', '2px solid red');
            $mailInput.css('border', ' 2px solid #cecece');
            $topicInput.css('border', ' 2px solid #cecece');
            $textarea.css('border', ' 2px solid #cecece');
        }
    })

    // sticky menu
    const $sticky = $('.stickyBar');
    const $ul = $sticky.find('.menu');
    const top = $ul.offset().top;

    $(function () {


        $(window).on('scroll', function () {
            const pix = $(document).scrollTop();
            console.log('scroll: ' + pix);

            if (pix > top) {
                $sticky.addClass('sticky');
            } else {
                $sticky.removeClass('sticky');
            }
            
            // menu background with scroll
            if (pix >= 900 && pix < 2350) {
                $firstMenuBtn.css('color', 'rgba(255, 255, 255, 1)');
            } else {
                $firstMenuBtn.css('color', 'rgba(255, 255, 255, 0.2)');
            }

            if (pix >= 2350 && pix < 3375) {
                $secondMenuBtn.css('color', 'rgba(255, 255, 255, 1)');
            } else {
                $secondMenuBtn.css('color', 'rgba(255, 255, 255, 0.2)');
            }

            if (pix >= 3375 && pix < 4380) {
                $thirdMenuBtn.css('color', 'rgba(255, 255, 255, 1)');
            } else {
                $thirdMenuBtn.css('color', 'rgba(255, 255, 255, 0.2)');
            }

            if (pix >= 4380 && pix < 5270) {
                $fourthMenuBtn.css('color', 'rgba(255, 255, 255, 1)');
            } else {
                $fourthMenuBtn.css('color', 'rgba(255, 255, 255, 0.2)');
            }

            if (pix >= 5270 && pix < 6238) {
                $fifthMenuBtn.css('color', 'rgba(255, 255, 255, 1)');
            } else {
                $fifthMenuBtn.css('color', 'rgba(255, 255, 255, 0.2)');
            }

            if (pix >= 6243) {
                $sixthMenuBtn.css('color', 'rgba(255, 255, 255, 1)');
            } else {
                $sixthMenuBtn.css('color', 'rgba(255, 255, 255, 0.2)');
            }
        })
    });

    $(window).on('rezise', function () {
        if ($sticky.hasClass('sticky')) {
            pix = $ul.offset().top;
        } else {
            pix = $sticky.offset().top;
        }

        const pix = $(document).scrollTop();

        if (pix > top) {
            $sticky.addClass('sticky');
        } else {
            $sticky.removeClass('sticky');
        }
    });

    // scroll tops

    const body = $('body');
    const topScroll = body.scrollTop();
    const $headBtn = $('.down-arrow');
    const $firstMenuBtn = $ul.children().first();
    const $secondMenuBtn = $ul.children().eq(1);
    const $thirdMenuBtn = $ul.children().eq(2);
    const $fourthMenuBtn = $ul.children().eq(3);
    const $fifthMenuBtn = $ul.children().eq(4);
    const $sixthMenuBtn = $ul.children().eq(5);

    if (mobile.matches) {
        $firstMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 1280
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $secondMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 3320
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $thirdMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 4760
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $fourthMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 5660
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $fifthMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 7660
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $sixthMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 8847
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
    } else if (tablet.matches) {
        $firstMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 940
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $secondMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 3480
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $thirdMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 8179
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $fourthMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 5420
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $fifthMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 7660
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
        $sixthMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 8847
            }, 1000);
            navigation.slideUp();
            hamburgerBtn.toggleClass('change');
        });
    } else if (desktop.matches) {
        $headBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 900
            }, 1000);
        });
        $firstMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 900
            }, 1000);
        });
        $secondMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 2350
            }, 1000);
        });
        $thirdMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 3375
            }, 1000);
        });
        $fourthMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 4380
            }, 1000);
        });
        $fifthMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 5270
            }, 1000);
        });
        $sixthMenuBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 6281
            }, 1000);
        });
    }

    requireRightButton();
    requireLeftButton();
    rightButton();
    leftButton();

});
