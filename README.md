# @tailwindcss/vite fails handling image-set() notations

when using image-set() CSS functional notations in a css file and processing them with the tailwind vite plugin,

```css
background-image: image-set(
  url("@/assets/image1.avif") 1x,
  url("@/assets/image2.avif") 2x,
);
```

becomes

```css
background-image:image-set(url(/assets/image1-xxx.avif) 1x,url(2x))
```