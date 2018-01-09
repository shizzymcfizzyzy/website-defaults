/*******************************************************************************
 * Navbar Component
 ******************************************************************************/

document.addEventListener("DOMContentLoaded", function()
{

  function Navbar(navbar)
  {
    this.navbar = navbar;

    this.navbar
        .querySelector(".toggle-navbar-collapse")
        .addEventListener("click", this._onClick.bind(this), false);
  }

  Navbar.prototype.toggleCollapse = function()
  {
    this.navbar.classList.toggle("expanded");
  };

  Navbar.prototype._onClick = function()
  {
    this.toggleCollapse();
  };

  var navbars = document.getElementsByClassName("navbar");
  for (var i = 0; i < navbars.length; i++)
  {
    new Navbar(navbars[i]);
  }

}, false);
