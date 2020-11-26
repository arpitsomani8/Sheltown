var select = document.getElementById("my");
select.onchange = function () {
  select.className = this.options[this.selectedIndex].className;
};
