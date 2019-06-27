window.onbeforeunload = function() {
  window.scrollTo(0,0);
}

var mastheadHeight = $("#masthead-fixed").height();

$( window ).on("resize",function(){

  mastheadHeight = $("#masthead-fixed").height()/2;

})
sIndex = 1;

var jumpIndex;

$('.jump-point').each(function(index){

  jumpIndex = index;

})


$('#next-checkpoint').on("click",function scrollNext(){
  var el = $('.jump-point:eq('+sIndex+')')
  $('html,body').animate({

    scrollTop: el.offset().top - mastheadHeight

  },'slow')

  sIndex++;

  console.log(sIndex);

  if(sIndex>jumpIndex){

    sIndex = 0;

  }
  console.log(sIndex,el.html());
  $(this).html('<span>'+el.html()+'<i class="material-icons">expand_more</i></span>')
})
