## Instructions to reproduce

1. run `npm install`
2. run `gulp`
3. run `gulp min`
4. See the difference in `styles.css` and `styles.min.css`

You should see this:

```
// styles.css
.selector {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

// styles.min.css
.selector{display:-ms-flexbox;display:flex}
```

Then, change autoprefixer from `last 3 versions` to `last 20 version`. You'll see this:

```
// styles.css
.selector {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

// styles.min.css
.selector{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex
}
```