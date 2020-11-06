// const images = document.querySelectorAll("[src]");
const images = document.querySelectorAll(".lazy");
console.log(images);

function preloadImage(img) {
  const src = img.getAttribute("src");
  if (!src) {
    return;
  }

  img.src = src;
}

const imgOptions = {
  // root: null,
  // rootMargin: "0px 0px -500px 0px",
  threshold: 0.25,
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
