# @tailwindcss/vite failes handling image-set() notations

```css
background-image: image-set(
  url("@/assets/image1.avif") 1x,
  url("@/assets/image2.avif") 2x,
);
```

```css
background-image:image-set(url(/assets/image1-xxx.avif) 1x,url(2x))
```