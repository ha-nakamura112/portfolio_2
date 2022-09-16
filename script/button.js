const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Thank you!', 'success')
  })
}

var img;
function sampleimg1(){
img = document.getElementById("image_file");
img.src = "./img/project1.png";
}

function sampleimg2(){
img = document.getElementById("image_file");
img.src = "./img/project2(2).png";
}

function sampleimg3(){
img = document.getElementById("image_file");
img.src ="./img/project3(1).png";
}

$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 300){
            $(this).addClass('active');
          }else{
            $(this).removeClass('active');
          }
      });
  });
});

