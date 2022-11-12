$(document).ready(function() {
    $('.intro').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
    });

    $("a").each(function () {
      if ($(this).attr('href') === window.location.pathname) {
          $(this).css('color', '#000');
      }
  });

    let burger = $('.header__burger');
    let menu = $('.header__body-mob');

        burger.on("click", function() {
            menu.toggleClass('active');
            $(this).toggleClass('active');
            $("body").toggleClass('no-scroll');
            $('.header__search').toggleClass('active');
    });

    $.each($('.form__radiobutton'), function(index, val) {
      if($(this).find('input').prop('checked')==true) {
          $(this).addClass('active');
      }
  });

  $(document).on("click", '.form__radiobutton', function(event) {
      $(this).parents('.form__radiobuttons').find('.form__radiobutton').removeClass('active');
      $(this).parents('.form__radiobuttons').find('.form__radiobutton input').prop('checked', false);
      $(this).toggleClass('active');
      $(this).find('input').prop('checked', true);
      return false;
  });

  modalButton = $("[data-modal]");
  modalWindow = $("#popup");
  modalClose = $("[data-close]")

  modalButton.on("click", function() {
      modalWindow.addClass('active');
      $("body, html").addClass('no-scroll');
  });

  modalClose.on("click", function() {
      modalWindow.removeClass('active');
      $("body, html").removeClass('no-scroll');
  });

});

modalClick = $("[data-register]");
modalWin = $("#register");
modalClose = $("[data-close]")

modalClick.on("click", function() {
  modalWin.addClass('active');
    $("body, html").addClass('no-scroll');
    modalWindow.removeClass('active');
});

modalClose.on("click", function() {
    modalWin.removeClass('active');
    $("body, html").removeClass('no-scroll');
});

try{
  var el=document.getElementById('msgText').getElementsByTagName('a');
  var url=document.location.href;
  for(var i=0;i<el.length; i++){
  if (url==el[i].href){
  el[i].className += ' act';
  };
  };
  }catch(e){}

  function uploadFile(target) {
    document.getElementById("file-name").innerHTML = target.files[0].name;
}

$(document).ready(function() {
  $.each($('.contact__form-checkbox'), function(index, val) {
      if($(this).find('input').prop("checked")==true){
          $(this).addClass('active');
      }
  });

  $(document).on("click", '.contact__form-checkbox', function(event) {
      if($(this).hasClass('active')){
          $(this).find('input').prop("checked", false);
      }else{
          $(this).find('input').prop("checked", true);
      }
      $(this).toggleClass('active');

      return false;
  });
});

function highlightCurrent() {
  const curPage = document.URL;
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    if (link.href == curPage) {
      link.classList.add("current");
    }
  }
}


document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    highlightCurrent()
  }
};

$(document).ready(function() {
  $('ul#my-menu ul').each(function(index) {
  $(this).prev().addClass('collapsible').click(function() {
  if ($(this).next().css('display') == 'none') {
  $(this).next().slideDown(200, function () {
  $(this).prev().removeClass('collapsed').addClass('expanded');
  });
  }else {
  $(this).next().slideUp(200, function () {
  $(this).prev().removeClass('expanded').addClass('collapsed');
  $(this).find('ul').each(function() {
  $(this).hide().prev().removeClass('expanded').addClass('collapsed');
  });
  });
  }
  return false;
  });
  });
  });

  const dropdown = new bootstrap.Dropdown(element, {
    popperConfig(defaultBsPopperConfig) {
      // const newPopperConfig = {...}
      // use defaultBsPopperConfig if needed...
      // return newPopperConfig
    }
  })

/* */