document.addEventListener('DOMContentLoaded',function(event){

  // gatherm tab menu buttons
  var tabSelectors = document.querySelectorAll('.nav .list__item');
  var tabSelectorsArray = Array.prototype.slice.call(tabSelectors);

  // gather tabs
  var tabs = document.querySelectorAll('.tab');
  var tabsArray = Array.prototype.slice.call(tabs);

  // tab functionality
  for (var i = 0; i < tabSelectors.length; i++) {
    // add click onto tab menu buttons
    tabSelectors[i].addEventListener('click', function() {
      // get index of clicked tab
      var indexTabSelector = tabSelectorsArray.indexOf(this);

      // to be activated tab
      var tab = tabs.item(indexTabSelector);

      // if clicked tab menu button is active, do nothing
      // else deactivate by removing active class of active tab menu button and active clicked tab menu button by adding class
      if (this.classList.contains('is-active')) {
      } else {
        for (var i = 0; i < tabSelectors.length; i++) {
          tabSelectors[i].classList.remove('is-active');
        }
        this.classList.add('is-active');
      }

      // if clicked tab is active, do nothing
      // else deactivate by removing active class of active tab and active clicked tab by adding class
      if (tab.classList.contains('is-active-tab')) {
      } else {
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove('is-active-tab');
        }
        tab.classList.add('is-active-tab');
      }
    });
  }


  /*
   * gallery
   */

  (function() {

    var bodyEl = document.querySelector('.body');
    var galleryItems = document.querySelectorAll('.gallery__item');
    var popUp = document.getElementById('pop-up');
    var btnClosePopUp = document.querySelector('#close-pop-up');

    var projection = document.getElementById('projection');
    console.log(projection + "projection el");

    // activate popup
    function openPopUp() {
      // open overlay
      bodyEl.classList.add('has-active-popup');
      this.classList.add('is-being-displayed');

      // replace popup img src with clicked item img src
      projection.src = this.getAttribute('data-img');

      // replace popup title/text with clicked item title/text
      var itemTitle = this.querySelector('.gallery__item__title').innerHTML;
      var itemCaption = this.querySelector('.gallery__item__caption').innerHTML;
      var popUpTitle = popUp.querySelector('.gallery-pop-up__title');
      var popUpCaption = popUp.querySelector('.gallery-pop-up__caption');

      popUpTitle.innerHTML = itemTitle;
      popUpCaption.innerHTML = itemCaption;

    }

    // add click event onto gallery items
    for (var i = 0; i < galleryItems.length; i++) {
      galleryItems[i].addEventListener('click', openPopUp);
    };

    // deactivate popup
    function closePopUp() {
      bodyEl.classList.remove('has-active-popup');
      for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove('is-being-displayed');
      };
    }

    //pop up nav

    var galleryBtns = document.querySelectorAll('.gallery-pop-up__nav');
    var btnPrevious = document.getElementById('gallery__btn-previous');
    var btnNext = document.getElementById('gallery__btn-next');

    var displayedItem = document.querySelector('li.gallery__item.is-being-displayed');

    var itemsArray = Array.prototype.slice.call(galleryItems);
    var currentLocation = itemsArray.indexOf(displayedItem) + 1;
    var totalItems = galleryItems.length;
    var paginationElementTotal = document.getElementById('gallery-pop-up__pagination__total');
    var paginationElementCurrent = document.getElementById('gallery-pop-up__pagination__current');

    // initiate count in pagination
    paginationElementCurrent.innerHTML = currentLocation;
    paginationElementTotal.innerHTML = totalItems;

    for (var i = 0; i < galleryBtns.length; i++) {

      galleryBtns[i].addEventListener('click', function() {

        //var displayedItem = document.querySelector('li.gallery__item.is-being-displayed');
        console.log("click");

        // prev btn clicked
        if (this == btnPrevious) {
          console.log("click prev");

          currentLocation -= 1;
          paginationElementCurrent.innerHTML = currentLocation;

          console.log(currentLocation);

          if (currentLocation <= 1) {
            btnPrevious.classList.add('is-hidden');
            console.log("smaller than 1 so should be hidden");
          } else {
            btnNext.classList.remove('is-hidden');
          }

        // next btn clicked
        } else if ( this == btnNext ) {
          console.log("click next");

          currentLocation += 1;
          paginationElementCurrent.innerHTML = currentLocation;

          console.log(currentLocation);

          if (currentLocation >= totalItems) {
            btnNext.classList.add('is-hidden');
            console.log("equal or greater than than total so should be hidden");
          } else {
            btnPrevious.classList.remove('is-hidden');
          }

        }
      });

      console.log(currentLocation + "current location");
    }

    // click close button
    btnClosePopUp.addEventListener('click', closePopUp);
  })();

  // click gallery item
   // open overlay
   // replace img src/title/text with clicked items img src/title/text

  // if overlay active
    // click left button
      // get previous gallery item
      // replace img src/title/text with clicked items img src/title/text
    // click right button
      // get next gallery item
      // replace img src/title/text with clicked items img src/title/text




});

/* for (var i = 0; i < galleryBtns.length; i++) {

  galleryBtns[i].addEventListener('click', function() {

    var displayedItem = document.querySelector('li.gallery__item.is-being-displayed');

    // prev btn clicked
    if (this == btnPrevious) {
      console.log("click prev");

      var previousItem = displayedItem.previousElementSibling;

      displayedItem.classList.remove('is-being-displayed');
      previousItem.classList.add('is-being-displayed');

      //sliderProjection.src = previousItem.querySelector('.shop-item__gallery__item__visual__img').src;

      if (previousItem.previousElementSibling == null) {
        btnPrevious.classList.add('is-hidden');
      }

      if (btnNext.classList.contains('is-hidden')) {
        btnNext.classList.remove('is-hidden');
      }

      currentLocation -= 1;

      //paginationElementCurrent.innerHTML = currentLocation;

    // next btn clicked
    } else if ( this == btnNext ) {
      console.log("click next");

      var nextItem = displayedItem.nextElementSibling;

      displayedItem.classList.remove('is-being-displayed');
      nextItem.classList.add('is-being-displayed');

      //sliderProjection.src = nextItem.querySelector('.shop-item__gallery__item__visual__img').src;

      if ( nextItem.nextElementSibling == null ) {
        btnNext.classList.add('is-hidden');
      }

      if (btnPrevious.classList.contains('is-hidden')) {
        btnPrevious.classList.remove('is-hidden');
      }

      currentLocation += 1;
      //paginationElementCurrent.innerHTML = currentLocation;
    }
  });
} */
