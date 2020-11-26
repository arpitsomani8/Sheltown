var select = document.getElementById("mySelectedd");
select.onchange = function () {
  select.className = this.options[this.selectedIndex].className;
};
