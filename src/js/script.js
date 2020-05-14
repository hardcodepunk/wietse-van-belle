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

    var currentLocation = 1;

    var bodyEl = document.querySelector('.body');
    var galleryItems = document.querySelectorAll('.gallery__item');
    var popUp = document.getElementById('pop-up');
    var btnClosePopUp = document.querySelector('#close-pop-up');

    var projection = document.getElementById('projection');

    // activate popup
    function openPopUp() {
      // open overlay
      bodyEl.classList.add('has-active-popup');
      this.classList.add('is-being-displayed');

      // Create a new element
      var newCaption = document.createElement('p');
      newCaption.id = "gallery-pop-up__caption";
      // Get the reference node
      var referenceNode = document.querySelector('#reference-for-caption');

      // Insert the new node before the reference node
      referenceNode.after(newCaption);

      var currentLocation = itemsArray.indexOf(this);

      paginationElementCurrent.innerHTML = currentLocation;

      if (currentLocation >= totalItems) {
        btnNext.classList.add('is-hidden');
        btnPrevious.classList.remove('is-hidden');
      } else if (currentLocation <= 0) {
        btnPrevious.classList.add('is-hidden');
        btnNext.classList.remove('is-hidden');
      } else {
        for (var i = 0; i < galleryBtns.length; i++) {
          galleryBtns[i].classList.remove('is-hidden');
        }
      }

      // replace popup img src with clicked item img src
      projection.src = this.getAttribute('data-img');
      setTimeout(function(){
       projection.classList.add('is-being-displayed');
      }, 100);
      // replace popup title/text with clicked item title/text
      var itemTitle = this.querySelector('.gallery__item__title').innerHTML;
      var itemCaption = this.querySelector('.gallery__item__caption').innerHTML;
      var popUpTitle = popUp.querySelector('.gallery-pop-up__title');
      var popUpCaption = document.getElementById('gallery-pop-up__caption');

      popUpTitle.innerHTML = itemTitle;
      popUpCaption.innerHTML = "";

      var i = 0;
      var speed = 40;

      function typeWriter() {
        if (i < itemCaption.length) {
          popUpCaption.innerHTML += itemCaption.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }

      typeWriter();

    }

    // add click event onto gallery items
    for (var i = 0; i < galleryItems.length; i++) {
      galleryItems[i].addEventListener('click', openPopUp);
    };

    // deactivate popup
    function closePopUp() {
      bodyEl.classList.remove('has-active-popup');
      projection.classList.remove('is-being-displayed');
      document.getElementById("gallery-pop-up__caption").remove();

      for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove('is-being-displayed');
      };
    }

    //pop up nav

    var galleryBtns = document.querySelectorAll('.gallery-pop-up__nav');
    var btnPrevious = document.getElementById('gallery__btn-previous');
    var btnNext = document.getElementById('gallery__btn-next');

    //var displayedItem = document.querySelector('li.gallery__item.is-being-displayed');

    var itemsArray = Array.prototype.slice.call(galleryItems);
    var totalItems = galleryItems.length - 1;
    var paginationElementTotal = document.getElementById('gallery-pop-up__pagination__total');
    var paginationElementCurrent = document.getElementById('gallery-pop-up__pagination__current');

    // initiate count in pagination
    paginationElementCurrent.innerHTML = currentLocation;
    paginationElementTotal.innerHTML = totalItems;

    for (var i = 0; i < galleryBtns.length; i++) {

      galleryBtns[i].addEventListener('click', function() {

        var displayedItem = document.querySelector('li.gallery__item.is-being-displayed');
        var currentLocation = itemsArray.indexOf(displayedItem);
        projection.classList.remove('is-being-displayed');

        // prev btn clicked
        if (this == btnPrevious) {

          document.getElementById("gallery-pop-up__caption").remove();

          // Create a new element
          var newCaption = document.createElement('p');
          newCaption.id = "gallery-pop-up__caption";
          // Get the reference node
          var referenceNode = document.querySelector('#reference-for-caption');

          // Insert the new node before the reference node
          referenceNode.after(newCaption);

          currentLocation -= 1;
          paginationElementCurrent.innerHTML = currentLocation;

          // update gallery item status (hide/show by removing/adding class)
          for (var i = 0; i < galleryItems.length; i++) {
            galleryItems[i].classList.remove('is-being-displayed');
          };
          galleryItems[currentLocation].classList.add('is-being-displayed');

          if (currentLocation <= 0) {
            btnPrevious.classList.add('is-hidden');
          } else {
            btnNext.classList.remove('is-hidden');
          }

          var displayedItem = document.querySelector('li.gallery__item.is-being-displayed');

          // replace popup img src with clicked item img src
          projection.src = displayedItem.getAttribute('data-img');
          setTimeout(function(){
           projection.classList.add('is-being-displayed');
          }, 100);

          // replace popup title/text with clicked item title/text
          var itemTitle = displayedItem.querySelector('.gallery__item__title').innerHTML;

          var itemCaption = displayedItem.querySelector('.gallery__item__caption').innerHTML;
          var popUpTitle = popUp.querySelector('.gallery-pop-up__title');
          var popUpCaption = document.getElementById('gallery-pop-up__caption');

          popUpTitle.innerHTML = itemTitle;
          popUpCaption.innerHTML = "";

          var i = 0;
          var speed = 40;

          function typeWriter() {
            if (i < itemCaption.length) {
              popUpCaption.innerHTML += itemCaption.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            }
          }

          typeWriter();

        // next btn clicked
        } else if ( this == btnNext ) {

          document.getElementById("gallery-pop-up__caption").remove();

          // Create a new element
          var newCaption = document.createElement('p');
          newCaption.id = "gallery-pop-up__caption";
          // Get the reference node
          var referenceNode = document.querySelector('#reference-for-caption');

          // Insert the new node before the reference node
          referenceNode.after(newCaption);

          currentLocation += 1;
          paginationElementCurrent.innerHTML = currentLocation;

          if (currentLocation >= totalItems) {
            btnNext.classList.add('is-hidden');
          } else {
            btnPrevious.classList.remove('is-hidden');
          }

          // update gallery item status (hide/show by removing/adding class)
          for (var i = 0; i < galleryItems.length; i++) {
            galleryItems[i].classList.remove('is-being-displayed');
          };
          galleryItems[currentLocation].classList.add('is-being-displayed');

          var displayedItem = document.querySelector('li.gallery__item.is-being-displayed');

          // replace popup img src with clicked item img src
          projection.src = displayedItem.getAttribute('data-img');
          setTimeout(function(){
           projection.classList.add('is-being-displayed');
          }, 100);

          // replace popup title/text with clicked item title/text
          var itemTitle = displayedItem.querySelector('.gallery__item__title').innerHTML;

          var itemCaption = displayedItem.querySelector('.gallery__item__caption').innerHTML;
          var popUpTitle = popUp.querySelector('.gallery-pop-up__title');
          var popUpCaption = document.getElementById('gallery-pop-up__caption');

          popUpTitle.innerHTML = itemTitle;
          popUpCaption.innerHTML = "";

          var i = 0;
          var speed = 40;

          function typeWriter(e) {
            if (i < itemCaption.length) {
              popUpCaption.innerHTML += itemCaption.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            }
          }

          typeWriter();
        }

      });
    }

    // click close button
    btnClosePopUp.addEventListener('click', closePopUp);
  })();
});
