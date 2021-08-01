window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("mainnav").style.top = "0";
      document.getElementById("mainnav").style.background ="#969696";
    } else {
      document.getElementById("mainnav").style.top = "42px";
      document.getElementById("mainnav").style.background ="#9e9e9e"
    }
  }