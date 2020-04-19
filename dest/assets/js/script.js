var tabSelectors = document.querySelectorAll('.nav .list__item');
var tabSelectorsArray = Array.prototype.slice.call(tabSelectors);

var tabs = document.querySelectorAll('.tab');
var tabsArray = Array.prototype.slice.call(tabs);

console.log(tabSelectors);
for (var i = 0; i < tabSelectors.length; i++) {
  tabSelectors[i].addEventListener('click', function() {
    console.log("clicked");
    console.log(this);
    var indexTabSelector = tabSelectorsArray.indexOf(this);
    console.log(indexTabSelector + " index");

    var tab = tabs.item(indexTabSelector);
    console.log(tab + " found tab");

    if (this.classList.contains('is-active')) {
    } else {
      for (var i = 0; i < tabSelectors.length; i++) {
        tabSelectors[i].classList.remove('is-active');
      }
      this.classList.add('is-active');
    }

    if (tab.classList.contains('is-active-tab')) {
    } else {
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('is-active-tab');
      }
      tab.classList.add('is-active-tab');
    }
  });
}
