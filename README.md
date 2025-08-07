# Grapesjs daisyUI

[DEMO](https://codepen.io/mkhairi/pen/BaKGadb)

> Requires [`grapesjs-plugin-forms`](https://github.com/artf/grapesjs-plugin-forms)

Tailwind intergration which includes the complete set of blocks from [Tailblocks.cc](https://tailblocks.cc/), bases on [Destack](https://github.com/LiveDuo/destack).

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-daisyui"></script>

<div id="gjs"></div>
```

### JS
```js
// Handle tailwind's use of slashes in css names
const escapeName = (name) => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, '-');

const editor = grapesjs.init({
  container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  selectorManager: { escapeName },
  plugins: ['grapesjs-daisyui'],
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}

.change-theme-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
}

.change-theme-button:focus {
  /* background-color: yellow; */
  outline: none;
  box-shadow: 0 0 0 2pt #c5c5c575;
}
```

### `Optional` CSS
```css
/* Make blocks full width */
.gjs-block {
    padding: 0 !important;
    width: 100% !important;
    min-height: auto !important;
}

/* Fit icons properly */
.gjs-block svg {
    width: 100%;
}
```


## Summary

* Plugin name: `grapesjs-daisyui`
* Commands
    * `get-tailwindCss` - Get Tailwind CSS of your page
    * `open-update-theme` - Open theme modal

### `get-tailwindCss` Usage

```js
// By default it will print css to console
editor.runCommand('get-tailwindCss');

// Using options
editor.runCommand('get-tailwindCss', { /* Options here */ });
```

#### `get-tailwindCss` Options

| Option | Description | Default |
|-|-|-
| `callback` | Calback for resulting css | `twcss => console.log(twcss)` |


## Options

| Option | Description | Default |
|-|-|-
| `tailwindPlayCdn` | URL for fetching tailwind play cdn | `https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4` |
| `daisyuiCdn` | URL for daisyUI play cdn | `https://cdn.jsdelivr.net/npm/daisyui@5` |
| `plugins` | array to include tailwind 1st party plugins | `[]` |
| `config` | custom tailwind config | `{}` |
| `changeThemeText` | Change theme modal title | `Change Theme` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-daisyui`
* NPM
  * `npm i grapesjs-daisyui`
* GIT
  * `git clone https://github.com/mkhairi/grapesjs-daisyui.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-daisyui.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-daisyui'],
      pluginsOpts: {
        'grapesjs-daisyui': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-daisyui';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/mkhairi/grapesjs-daisyui.git
$ cd grapesjs-daisyui
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
