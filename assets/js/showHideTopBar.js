
var lastScrollTop = 115;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
      document.getElementById('top').style.display = "none";
      // document.getElementById('upper').style.display = "none";
      // document.getElementById('navi').style.position  = "relative";
      // document.getElementById('upper').style.position = "relative";
   } else {
      // upscroll code
      document.getElementById('top').style.display = "flex";
      // document.getElementById('upper').style.display = "block";
      document.getElementById('top').style.position  = "fixed";
      // document.getElementById('upper').style.position = "fixed";
      // if(document.getElementById('banner') !== null){
      //    document.getElementById('banner').style.marginTop = "115px";
      // }else{
      //    document.getElementById('second-main').style.marginTop = "115px";
      // }
      // document.getElementById('navi').style.top  = "35px";
      
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);