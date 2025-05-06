# Interface.js

**Interface.js** is a mini library based on [p5.js](https://p5js.org) that allows you to easily create, organize, and access HTML controls inside a p5.js sketch.

---
Add to your index.html file
```html
<script src="https://cdn.jsdelivr.net/gh/Gepoide/interface@latest/interface.js"></script>
```

---

## 🚀 Initialization

Inside your `setup()`:

```js
initializeUI(sketchTitle)
```

- `sketchTitle` (string): sets the sketch title in the UI and is also used for any downloadable file.

---

## 🧱 Creating a Panel

```js
ui.createPanel(title)
```

- `title` (string): sets the title of the panel.  
The first panel is assigned index `0`, and subsequent panels follow the order (`1`, `2`, ...).

---

## 🎛️ Adding Controls

All controls require the panel index as the first parameter (`panelIndex`).  
If the index refers to a non-existent panel, the control will be placed in the last available panel.

---

### 🎚️ Slider (Range)

```js
ui.addSlider(panelIndex, name, min, max, value, step)
```

- `name` (string): control label  
- `min`, `max`: slider minimum and maximum values  
- `value`: default slider value  
- `step`: step size

---

### 🔘 Button

```js
ui.addButton(panelIndex, name, callbackFunction)
```

- `name` (string): button label  
- `callbackFunction`: function triggered on click

---

### ☑️ Checkbox

```js
ui.addCheckbox(panelIndex, name, value = false)
```
- `name`: text displayed in the dropdown 
- `value` (boolean): default checkbox value

---

### ⬇️ Select Dropdown

```js
ui.addSelect(panelIndex, name)
ui.addOption(panelIndex, controlIndex, name, value)
```

- `controlIndex`: index of the Select control  
- `name`: text displayed in the dropdown  
- `value`: option value

---

### 📝 Text or Number Input

```js
ui.addText(panelIndex, name, value)
ui.addNumber(panelIndex, name, value)
```
- `name` (string): input label   
- `value` : default input value
- Outputs a `string` or `number`, respectively

---

## 📥 Image Upload

```js
ui.addFile(name)
```
- `name` (string): input label   

To access the uploaded image:

```js
ui.accessImage(panelIndex, controlIndex)
```

> ⚠️ Make sure to check if the image is loaded before using it (`if(img)`).

---

## 💾 Save Button

```js
ui.addSaveButton(panelIndex, extension = "png", duration = "2")
```

- `extension`: "png", "jpeg", "gif", "svg"  
> For `svg`, include [p5.js-svg](https://unpkg.com/p5.js-svg@1.6.0) and set the renderer to SVG.  
> For `gif`, `duration` sets the duration in seconds.

---

## 📊 Accessing Values

```js
ui.accessValue(panelIndex, controlIndex, setValue = null)
```

- `setValue` (optional): sets the value at runtime (can be used to lock or animate)

---

## 📊 Adding onchange Function

```js
ui.addOnchangeFunction(panelIndex, controlIndex, fn)
```

- `fn`: function to be executed once the value of the control change

---

## 🧠 Utilities

### Check if the mouse is over the interface

```js
ui.mousehoverUI()
```

---

### Make the UI responsive

In your sketch:

```js
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  ui.updatePanel();
}
```

---

## 🧩 Compatibility

This library is designed to work within p5.js sketches, making it easy to manage HTML-based controls like sliders, inputs, dropdowns, and buttons.

---

## 📄 License

MIT
