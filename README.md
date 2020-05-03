Jest css module transformer
---
This package provides a mock to `*.scss` & `*.css` files and keeps the class names intact in Jest snapshot

**Original markup**:
```html
    <div class=`container ${css.marginAuto}`>
        <section class=``${css.blogSection}`>...</section>
    </div>
```
**Snapshot markup without transformation**:
```html
    <div class="container undefined">
        <section class="undefined">...</section>
    </div>
```
**Snapshot markup with transformation**:
```html
    <div class="container marginAuto">
        <section class="blogSection">...</section>
    </div>
```

### Installation
```shell script
    yarn add --dev @ayusharma/jest-css-module-transformer
```

Or 

```shell script
    npm install --save-dev @ayusharma/jest-css-module-transformer
```

### Use
Add the following entry in Jest configuration file.
```javascript
    transform: {
        '^.+\\.(css|scss)$': '@ayusharma/jest-css-module-transformer'
    },
```


