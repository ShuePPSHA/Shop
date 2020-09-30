function DropdownFunction() {
    document.getElementById("Dropdown").classList.toggle("drop");
  }
  
window.onclick = function(event) {
    if (!event.target.matches('.mobile-header__dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("mobile-header__dropdown-links");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('drop')) {
          openDropdown.classList.remove('drop');
        }
      }
    }
  } 