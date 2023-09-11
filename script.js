function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector(".profile img")

  if(html.classList.contains("light")) {
    html.classList.remove("light");
    html.classList.add("dark");
    img.setAttribute("src", "assets/profile-pic-dark.jpg")
    img.setAttribute("alt", "Foto de Karina Sasaki de lado sorrindo, segurando a ponta do cabelo, usando óculos e camiseta cinza.")
  } else {
    html.classList.add("light");
    html.classList.remove("dark");
    img.setAttribute("src", "assets/profile-pic-light.jpg")
    img.setAttribute("alt", "Foto de rosto de Karina Sasaki, usando óculos.")
  }
}