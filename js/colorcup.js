var select = document.getElementById("mySelected");
select.onchange = function () {
  select.className = this.options[this.selectedIndex].className;
};
