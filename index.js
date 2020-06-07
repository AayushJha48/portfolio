$(document).ready(function(){
  $('.sidenav').sidenav();
  // smooth navigation section
  var navItemsLrg = $('.scr-lrg')
  navItemsLrg.click(function(e) {
    e.preventDefault()
    $('html, body').animate({
    scrollTop: $(e.target.hash).offset().top
  }, 1000);
    setTimeout(function () {
      $('nav').css('top', '0')
    }, 1050)
  })

  // scroll related things goes here
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop()

    // add active class to appropriate nav-link
    navItemsLrg.each(function () {
      var sectionOffSet = $(this.children[0].hash).offset().top - 60
      if(sectionOffSet <= scrollbarLocation) {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
      }
    })

    // change header position and removing button in Header
    if(scrollbarLocation < 460 && scrollbarLocation > 0) {
      $('nav').css({'top': '-80px'})
    } else {
      $('nav').css('top', '0')
    }

    // change other header properties adding
    if(scrollbarLocation > 60){
      $('nav').css({'background': 'linear-gradient(to left, #02203c, #001528)'})
    } else {
      $('nav').css({'background': 'inherit'})
    }
  })

  // contact section
  const contactOption1 = $('.contact-option:nth-child(1)')
  const contactOption2 = $('.contact-option:nth-child(2)')
  const choiceD = $('.choice-d:nth-child(2)')
  const choice1 = $('.choice-1:nth-child(3)')
  const choice2 = $('.choice-2:nth-child(4)')
  const options = $('.options')
  contactOption1.click(() => {
    choiceD.css('display', 'none')
    choice1.css('display', 'block')
    options.css('visibility', 'hidden')
  })
  contactOption2.click(() => {
    choiceD.css('display', 'none')
    choice2.css('display', 'block')
    options.css('visibility', 'hidden')
  })
});
