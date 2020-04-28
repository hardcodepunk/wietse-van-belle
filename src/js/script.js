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
