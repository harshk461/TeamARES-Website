const images = document.querySelectorAll("[data-src]");

const preloadImg = (img) => {
  const src = img.getAttribute("data-src");
  console.log(src);
  if (!src) return;
  img.src = src;
};

const imgOptions = {
  rootMargin: '0px 0px 500px 0px',
  threshold: 0
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImg(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
