/*==================================================*/
window.onload = function(){
  positionSwitch();
  checkFirstScroll();
  checkScroll();
};

window.onscroll = function(){
  positionSwitch();
  checkFirstScroll();
  checkScroll();
}

var pageTop = function(){

  if(!window.pageYOffset){

    return document.documentElement.scrollTop || window.scrollY || document.body.scrollTop;

  }else{

    return window.pageYOffset;

  }
};

//=============================================== book now scroll method ==
var bookNow = document.getElementById('book-now');

var $paddingTop = function() {

    bookNow.clientHeight

}

var $scrollTop = bookNow.offsetTop;

function positionSwitch(){

  console.log("scrolling");

    if (pageTop() > $scrollTop) {

      bookNow.className = "fixed";

    } else {

      bookNow.className = "static";
      //

    }

}
