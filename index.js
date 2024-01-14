const images = [
  // BU NESNEYİ DEĞİŞTİRMEYİN
  {
    image: "https://i.ibb.co/T48RzpD/food-avocadotoast.jpg",
    alt_text: "food-avocadotoast",
  },
  {
    image: "https://i.ibb.co/fFDwRTr/food-burger.jpg",
    alt_text: "food-burger",
  },
  {
    image: "https://i.ibb.co/Z6kQzRF/food-chickenfingers.jpg",
    alt_text: "food-chickenfingers",
  },
  {
    image: "https://i.ibb.co/TvFrJgV/food-poutine.jpg",
    alt_text: "food-poutine",
  },
  {
    image: "https://i.ibb.co/94P4YRd/food-ribs.jpg",
    alt_text: "food-ribs",
  },
  {
    image: "https://i.ibb.co/xJPTqGj/food-sandwich.jpg",
    alt_text: "food-sandwich",
  },
  {
    image: "https://i.ibb.co/25nNb71/food-sausage.jpg",
    alt_text: "food-sausage",
  },
  {
    image: "https://i.ibb.co/bXsYBXn/food-steak.jpg",
    alt_text: "food-steak",
  },
  {
    image: "https://i.ibb.co/L1pFsM8/food-tacos.jpg",
    alt_text: "food-tacos",
  },
];

// css dosyasının linki index.html'de eklenmemiş.

/* Kodlar Buradan aşağıya */

function myDiv() {
  let div = document.getElementsByClassName("gallery-content")[0];
  let imgs = div.children;
  for (let i = 0; i <= imgs.length; i++) {
    imgs[i].setAttribute("src", images[i].image);
    imgs[i].textContent = images[i].alt_text;
  }
}

myDiv();

function pickAllImgs() {
  let allImgs = document.querySelectorAll("img");
  console.log(allImgs);
  return allImgs;
}

pickAllImgs();

function addClass(className) {
  let imgs = pickAllImgs();
  imgs.classList.add(className);
}

addClass(border - md);
