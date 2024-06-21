export const handleScroll = () => {
  const header = document.getElementById("myHeader");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    header.classList.remove("header-transparent");
    header.classList.add("header-colored");
  } else {
    header.classList.remove("header-colored");
    header.classList.add("header-transparent");
  }
};

// Je l'utiliserai quand j'aurais à peu près tout fini
