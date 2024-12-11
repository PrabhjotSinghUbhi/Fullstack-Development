# chapter 4 - UNITS & SIZES IN CSS

- The 'r' in rem unit stands for root and em signifies emphasis.

- Most common type of unit we are going to use is px ie. pixels.
- for medium font size in browser font is `16px`
- `2rem` refers to double the root value ie. **font-size: 2rem;** means 32px.
- we use single **em** without **r** when we set the root value before hand for eg. we can set `font-size: 3rem;` and set the
  padding to `padding: 0.5em;`
## what a css reset looks like.
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}
```
- some units like percentage is dependent on its parent tag
for eg. 
```css
header{
  width: 50%;
}

/* header is parent to the h1 tag. */
head{
  width: 50%; 
  /*would decrease the width of the h1 to 25% of the webpage*/
}
```
# chapter 5 - CSS Typography


