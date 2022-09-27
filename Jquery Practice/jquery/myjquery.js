$(document).ready(function name(params) {
  console.log("i m in  a  new file now");

  //we can also write ony $ in place of  $(document).ready
  console.log("we re using jquery");
  // jQuery Syntax looks like this
  //$('selector').action()

  // clicks on all the p elements
  //$('p').click();// click on p

  $("p").click(function () {
    console.log("u  clicked on p", this);
    //   $(this).hide(); //hide
    //   $('#id').hide()
    //   $('.class').hide()
  }); //do this on click of p

  // $("p").dblclick(function () {
  //     console.log("u double clicked on p", this);
  //     //$(this).hide(); //hide
  //     // $('#id').hide()
  //     // $('.class').hide()
  //   }); //do this on click of p

  //   $("p").mouseenter(function () {
  //     console.log("u entered:", this);

  //     // $('#id').hide()
  //     // $('.class').hide()
  //   }); //do this on click of p

  //   $("p").hover(function () {
  //     console.log("u hover:", this);},
  //     function(){
  //         console.log("thanks for coming");

  //     // $('#id').hide()
  //     // $('.class').hide()
  //   }); //do this on click of p

  // there are three main types of selectors in jQuery
  // 1. element selector
  // 2. id selector
  // 3. class selector

  // 1. Element selector- This is an example of element selector which clicks on all p
  //$('p').click();

  // 2. Id selector-this is an example of id selector
  //$('#second').click();
  // 3. Class selector-this is an example of id selector
  //$(".odd").click();

  // other selectors
  //$('*').click()// clicks on all the elements
  //$('p.odd').click()  // clicks on all the elements
  //$('p:first').click() // clicks on all the elements

  // Events in jQuery
  // Mouse events=click,dblclick,mouseenter,mouse leave
  // KeyboardEvent=keypress,keydown,MediaKeyStatusMap
  // form events=submit,change,focus,blur
  // document/window events=load,resize,scroll,unload

  //demoing o method

  $("p").on({
    click: function () {
      console.log("thanks for clicking", this);
    },
    mouseleave: function () {
      console.log("mouse leave");
    },
  });

  //   $(wiki).hide()
  //   $(wiki).show()

  // $(wiki).hide(1000,function(){
  //     console.log("hidden");
  // })

  // $(wiki).show(1000,function(){
  //     console.log("show");
  // })

  // $('#but').click(function(){
  //     $('#wiki').toggle(1000)
  // })

  //   $("#but").click(function () {
  //     $("#wiki").fadeOut(5000);
  //   });

  //   fadeIn();
  //   fadeOut();
  //   fadeToggle();
  //   fadeTo();

  //slide function  :::callback fn and speed  are optional
  //  $('#wiki').slideUp(1000,function(){
  //     console.log("done");
  //  })
  // $('#wiki').slideDown(1000)
  //$('#wiki').slideToggle(1000)

  //animate fn in jquery
  //$('#wiki').animate({
  //    opacity:0.3,
  //    height:'150px',
  //   width:'350px'
  //},"fast")

  // $('#wiki').animate({opacity:0.3},4000);

  // $('#wiki').animate({opacity:0.9},1000);
  // $('#wiki').animate({width:'350px'},1000);
  //   $('#wiki').stop(9000);
});

// website for code :https://www.codewithharry.com/videos/learn-jquery-in-one-video-in-hindi/

// more info:
// $('#wiki').text(); // to get all text data in  console
// $('#wiki').text("set this text in o/p") //set text to 'set this text in o/p'
// $('body').html() //give html of body
// $('#ta').val('setting it to harry'); //change value of feild

// $('#inp').val('setting it to harry3'); //set the content to given
// $('#wiki').empty()   //empty the div content
// $('#wiki').val('u r so good'); // set the given line
// $('#wiki').reomve()  //remove the element like div tag

// $('#wiki').addClass('myclass1'); //add a class to following div
// $('#wiki').reomveClass('myclass1'); //remove class
// $('#wiki').css('background-color', 'red')
// $('#wiki').css('background-color')


//art of sending data to UI from server without reloading the page:ajax

    // AJAX Using jQuery
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });
