function injectStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
  :root {
  --panel-background: rgb(200, 200, 200, 0.5);
  --control-height: 18px;
  --panel-width: 160px;
  --panel-font: Helvetica, Arial;
  --panel-font-weight: bold;
  --panel-font-size: 13px;
  --panel-font-letter-spacing: -0.6px;
}

html,
body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}

/* Outer Shell */
.interface-shell {
  position:absolute;
  top:0;
  height: calc(100% - 16px);
  width: calc(100% - 16px);
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content auto;
  padding: 8px;
}

.interface-shell,
.interface-shell button,
.interface-shell select,
.interface-shell input[type="text"],
.interface-shell input[type="number"]{
  user-select:none;
  font-size: var(--panel-font-size);
  font-family: var(--panel-font);
  font-weight: var(--panel-font-weight);
  letter-spacing: var(--panel-font-letter-spacing);
}

/* Upper Button*/
.interface-controls {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  margin-bottom: 0;
 
}

.interface-controls button {
  padding: 5px 12px 5px 12px;
  background: var(--panel-background);
  border: none;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

.interface-controls button:hover {
  background: black;
  color: rgb(200,200,200);
}

.sketch-title {
  width: max-content;
  height: max-content;
  background: rgb(255,60,0) !important;
}

.sketch-title:hover{
  outline: 2px solid black;
  color: black !important;
}

.toggle-controls {
  justify-self: right;
}
.hide-button, 
.value-button{
  width: max-content;
  margin-left:8px;
}


/* Panel */
.panel-grid {
  height: 100%;
  width: max-content;
  display: flex;
  flex-flow: column wrap;
  column-gap: 8px;
  row-gap: 8px;
  padding: 0;
  margin-top: 8px;
  overflow: hidden visible;
}

.panel {
  width: var(--panel-width);
  background: var(--panel-background);
  border-radius: 15px;
  backdrop-filter: blur(4px);
  height: max-content;
}

.controls {
  

  padding: 10px 10px;
  margin-bottom: 24px;
}

.control-block {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  margin-bottom: 22px;
  height: 30px;
}

.control {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  min-width: 100%;
  z-index:1;
}

.control-name {
  padding-top: 5px;
  height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.control-name:hover{
color:rgb(128,128,128)
}


.control button {
  width: auto;  
  justify-self: stretch;
  align-self: stretch;
  height: var(--control-height);
  padding: 0px 12px 0px 12px;
  background: black;
  color: rgb(200, 200, 200);
  border: none;
  border-radius: 20px;
}

.control button:hover {
  background: transparent;
  outline: 1px solid black;
  color: black;
}

.control input[type="range"] {
  -webkit-appearance: none;
  height: 1.5px;
  background: black;
  border-radius: 20px;
  border-width: 0.1px;
  width: auto;
  margin-top: 10px;
  margin-bottom:6px;
}

.control input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background: black;
  border-radius: 20px;
}

.control input[type="text"],
.control input[type="number"]{
  -webkit-appearance: none;
  width: auto;
  apperance:none;
  outline: 1px solid black;
  background: transparent;
  border: none;
  border-radius: 20px;
  max-height: var(--control-height);
  padding: 2px 12px;
  margin: 0;
  min-width: 100%;
  box-sizing: border-box;
}

.control select{
  -webkit-appearance: none;
  apperance:none;
  outline: 1px solid black;
  background: black;
  color: rgb(200,200,200);
  border: none;
  border-radius: 20px;
  max-height: var(--control-height);
  padding: 1px 12px;
  margin: 0;
  min-width: 100%;
  box-sizing: border-box;
}

.control input[type="color"] {
  outline: 1px solid black;
  background: transparent;
  border: none;
  border-radius: 20px;
  height: var(--control-height);
  width: auto;
}
.control input[type="color"]::-webkit-color-swatch {
  -webkit-appearance: none;
  margin: 0;
  border: none;
  border-radius: 20px;
}

.control-checkbox-on{
  background: black !important;
  color: rgb(200,200,200) !important;
}

.control-checkbox-on:hover{
  background: gray !important;
  color: black !important;
  outline: 1px solid black !important;
}

.control-checkbox-off{
  background: transparent !important;
  color: black !important;
  outline: 1px solid black !important;
}

.control-checkbox-off:hover{
  background: lightgray !important;
  color: black !important;
  outline: 1px solid black !important;
}

.control-upload{
  text-align: left;
}

.save-block,
.panel-title-block {
  padding: 0px 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: auto 25%;
}

.save-text,
.panel-title-text {
  justify-self: left;
  align-self: center;
}

.save-button,
.panel-title-button {
  justify-self: stretch;
  align-self: stretch;
  padding: 0px 1px 1px 1px;
  background: black;
  color: rgb(200, 200, 200);
  border: none;
  border-radius: 20px;
  backdrop-filter: blur(4px);
  height: var(--control-height);
}

.save-button:hover,
.panel-title-button:hover {
  background: transparent;
  color: black;
  outline: 1px solid black;
}

.panel-title-block {
  padding-top: 10px;
  border-top: 1px solid black;
}

@media screen and (max-width: 600px) {
:root{
--panel-font-size:16px;
--panel-width: 200px;
--control-height: 24px;
}

.control-block {
  margin-bottom: 34px;
}
.control input[type="range"] {
  margin-bottom:6px;
}

.control-name {
  height: 20px;
}

 `;
  document.head.appendChild(style);
}

injectStyles();

let ui;

function initializeUI(name) {
  ui = new UI(name)
}

class UI {
  constructor(title) {
    this.panels = []
    this.title = title
    this.hide = false
    this.debug = false

    //create all the DOM elements 
    this.container = createDiv()
    this.interfaceControls = createDiv()
    this.sketchTitle = createButton(this.title)
    this.toggleControls = createDiv()
    this.hideButton = createButton("Toggle UI")
    this.valueButton = createButton("Toggle Values")
    this.panelGrid = createDiv()

    //assigning style to each element
    this.container.addClass("interface-shell")
    this.interfaceControls.addClass("interface-controls")
    this.sketchTitle.addClass("sketch-title")
    this.toggleControls.addClass("toggle-controls")
    this.hideButton.addClass("hide-button")
    this.valueButton.addClass("value-button")
    this.panelGrid.addClass("panel-grid")

    //parenting elements
    this.interfaceControls.parent(this.container)
    this.panelGrid.parent(this.container)
    this.sketchTitle.parent(this.interfaceControls)
    this.toggleControls.parent(this.interfaceControls)
    this.hideButton.parent(this.toggleControls)
    this.valueButton.parent(this.toggleControls)

    this.hideButton.mousePressed(() => {
      this.hide = !this.hide

      if (this.hide) {
        this.panelGrid.style("display", "none")

      } else {
        this.panelGrid.style("display", "flex")
      }
    })

    this.valueButton.mousePressed(() => {
      this.debug = !this.debug
      this.values()
    })
  }

  createPanel(name, collapseState = false) {

    let newPanel = new Panel(name, collapseState)

    newPanel.panel.parent(this.panelGrid)
    this.panels.push(newPanel)
  }

  checkIndex(index) {
    if (index > this.panels.length - 1) {
      return this.panels.length - 1
    } else {
      return index
    }
  }

  addSlider(index, name, minVal, maxVal, value, step) {
    this.panels[this.checkIndex(index)].addSlider(name, minVal, maxVal, value, step);
  }

  addButton(index, name, callbackFn) {
    this.panels[this.checkIndex(index)].addButton(name, callbackFn);

  }

  addCheckbox(index, name, value) {
    this.panels[this.checkIndex(index)].addCheckbox(name, value);

  }

  addSelect(index, name) {
    this.panels[this.checkIndex(index)].addSelect(name);

  }

  addOption(index, controlIndex, name, value) {
    this.panels[this.checkIndex(index)].controls.inputs[controlIndex].option(name, value);

  }

  addText(index, name, value, maxVal = null) {
    this.panels[this.checkIndex(index)].addText(name, value);

    if (maxVal) {
      let id = this.panels[this.checkIndex(index)].controls.inputs.length - 1

      this.panels[this.checkIndex(index)].controls.inputs[id].attribute("maxlength", maxVal)
    }
  }

  addNumber(index, name, value, minVal = null, maxVal = null) {
    this.panels[this.checkIndex(index)].addNumber(name, value);
    let id = this.panels[this.checkIndex(index)].controls.inputs.length - 1

    this.panels[this.checkIndex(index)].controls.inputs[id].attribute("min", 0)

    this.panels[this.checkIndex(index)].controls.inputs[id].attribute("max", maxVal)

  }

  addFile(index, name, callbackFn = null) {
    this.panels[this.checkIndex(index)].addFile(name, this.panels[index].controls.inputs.length, callbackFn);

  }

  addColorPicker(index, name, value) {
    this.panels[this.checkIndex(index)].addColorPicker(name, value);

  }

  addSaveButton(index, extension = "png", duration = 2) {
    this.panels[this.checkIndex(index)].addSaveButton(extension, duration);

  }

  accessImage(panelIndex, imageIndex) {
    const control = this.panels[panelIndex].controls.images[imageIndex];
    return control
  }

  accessValue(panelIndex, controlIndex, setValue = null) {
    const control = this.panels[panelIndex].controls.inputs[controlIndex];

    if (setValue === null) {
      if (control.attribute("type") == "number") {
        return control.value?.() - 0
      } else if (control.value() == "true") {
        return true
      } else if (control.value() == "false") {
        return false
      } else {

        return control.value?.()
      }
    } else {
      control.value(setValue);

      return this.accessValue(panelIndex, controlIndex);
    }
  }

  addOnchangeFunction(panelIndex, controlIndex, callbackFn = "null") {
    const control = this.panels[panelIndex].controls.inputs[controlIndex];

    control.removeAttribute("onchange")
    control.attribute('onchange', `function fn() {
      ui.values()
      ${callbackFn}
    }
      
    fn()`);
  }

  addOninputFunction(panelIndex, controlIndex, callbackFn = "null") {
    const control = this.panels[panelIndex].controls.inputs[controlIndex];

    control.removeAttribute("oninput")
    control.attribute('oninput', `function fn() {
      ui.values()
      ${callbackFn}
    }
      
    fn()`);

  }

  values() {
    for (let item of this.panels) {
      item.values(this.debug)
    }
  }


  mousehover() {
    let panelstates = []

    for (let item of this.panels) {
      if (item.hover()) {
        panelstates.push(true)
      }
    }

    if (panelstates.length > 0) {
      return true
    } else {
      return false
    }
  }

  clipboard(panelIndex, controlIndex) {
    let val = ui.accessValue(panelIndex, controlIndex)
    navigator.clipboard.writeText(String(val))

    ui.sketchTitle.html("Value copied: " + String(val))


    window.setTimeout(() => ui.sketchTitle.html(this.title), 1500)

  }

}

class Panel {
  constructor(name = "", collapseState) {
    this.state = {
      collapse: collapseState,
      debug: false,
      hover: false
    }
    this.controls = {
      inputs: [],
      span: [],
      names: [],
      images: [],
      block: createDiv()
    }

    //create all the DOM elements 
    this.panel = createDiv()

    this.save = {
      block: createDiv()
    }

    this.title = {
      block: createDiv(),
      text: createDiv(ui.panels.length + " - " + name),
      button: createButton("-")
    }

    //assigning style to each element
    this.panel.addClass("panel")
    this.controls.block.addClass("controls")
    this.save.block.addClass("save-block")

    this.title.block.addClass("panel-title-block")
    this.title.text.addClass("panel-title-text")
    this.title.button.addClass("panel-title-button")

    //parenting elements
    this.controls.block.parent(this.panel)
    this.save.block.parent(this.panel)
    this.title.block.parent(this.panel)

    this.title.text.parent(this.title.block)
    this.title.button.parent(this.title.block)

    this.title.button.mousePressed(() => {
      this.state.collapse = !this.state.collapse
      this.collapse()
    })

    this.collapse()
  }

  createControl(name, fn) {
    let control = {
      container: createDiv(),
      block: createDiv(),
      object: fn,
      name: createDiv(this.controls.inputs.length + " - " + name)
    }

    control.container.addClass("control-block");
    control.block.addClass("control");
    control.name.addClass("control-name");

    control.container.parent(this.controls.block)
    control.block.parent(control.container)
    control.object.parent(control.block)
    control.name.parent(control.container)

    control.object.attribute("oninput", "ui.values()")
    control.object.attribute("onchange", "ui.values()")

    this.controls.inputs.push(control.object);

    control.name.attribute('onclick', `ui.clipboard(${ui.panels.length - 1},${this.controls.inputs.length - 1})`)

    this.controls.names.push(name)
    this.controls.span.push(control.name)

  }


  addSlider(name, minVal, maxVal, value, step) {
    this.createControl(name, createSlider(minVal, maxVal, value, step))
  }
  addButton(name, callbackFn) {

    function createInterfaceButton(callbackFn) {
      let button = createButton("+")

      button.mousePressed(callbackFn)

      return button
    }

    this.createControl(name, createInterfaceButton(callbackFn))
  }

  addCheckbox(name, defaultVal) {
    function createInterfaceCheckbox(defaultVal = true) {
      let button = createButton("+", defaultVal)

      button.mousePressed(() => {
        if (button.value() == "true") {
          button.value(false)
          button.addClass("control-checkbox-off")
          button.removeClass("control-checkbox-on")

        } else if (button.value() == "false") {
          button.value(true)
          button.addClass("control-checkbox-on")
          button.removeClass("control-checkbox-off")
        }

        ui.values()
      })

      return button
    }

    this.createControl(name, createInterfaceCheckbox(defaultVal))
  }

  addSelect(name) {
    this.createControl(name, createSelect(false))
  }

  addText(name, value) {
    this.createControl(name, createInput(value))
  }

  addNumber(name, value) {
    this.createControl(name, createInput(value, "number"))
  }

  addFile(name, index, callbackFn = null) {
    let fileInput = createFileInput((file) => {
      if (file.type == 'image') {
        let img = loadImage(file.data, callbackFn);

        if (this.controls.images.length == 0) {
          for (let i = 0; i < index; i++) {
            this.controls.images[i] = undefined;
          }
          this.controls.images[index] = img;
        } else {
          this.controls.images.splice(index, 1, img)
        }
      }

    });
    fileInput.hide();

    function createInterfaceButton(callbackFn) {
      let button = createButton("Upload")

      button.mousePressed(callbackFn)
      button.addClass("control-upload")

      return button
    }

    this.createControl(name, createInterfaceButton((callbackFn) => {
      fileInput.elt.click()
      this.controls.images[index] = null
      if (callbackFn) {
        callbackFn
      }
    }))

  }

  addColorPicker(name, value = [255, 60, 0]) {
    this.createControl(name, createColorPicker(color(value)))
  }

  addSaveButton(extension, duration) {
    let button = createButton("+")
    let name = createDiv("Save")

    button.addClass("save-button")
    name.addClass("save-text")

    name.parent(this.save.block)
    button.parent(this.save.block)

    button.mousePressed(() => {
      if (extension == "gif") {
        saveGif(ui.title + "." + extension, duration)
      }
      else {
        save(ui.title + "." + extension)
      }
    });

  }

  values(bool) {
    for (let i = 0; i < this.controls.span.length; i++) {
      let current = this.controls.span[i]

      if (bool) {
        current.html(i + " - " + this.controls.inputs[i].value())
      } else {
        current.html(i + " - " + this.controls.names[i])
      }
    }
  }

  collapse() {

    if (this.state.collapse) {
      this.title.block.style("border-top", "none")
      this.save.block.style("display", "none")
      this.title.button.html("+")
      this.title.block.style("padding-top", "5px")
      this.title.block.style("margin-bottom", "5px")
      this.controls.block.style("display", "none")
    } else {
      this.title.block.style("border-top", "1px solid black")
      this.save.block.style("display", "grid")
      this.title.button.html("-")
      this.title.block.style("padding-top", "10px")
      this.title.block.style("margin-bottom", "10px")
      this.controls.block.style("display", "block")
      ui.panelGrid.style("height", "0")
      ui.panelGrid.style("height", "auto")
    }
  }

  hover() {
    let x = this.panel.position().x
    let y = this.panel.position().y
    let w = this.panel.size().width
    let h = this.panel.size().height

    if (mouseX > x &&
      mouseX < x + w &&
      mouseY > y &&
      mouseY < y + h
    ) {
      return true
    } else {
      return false
    }

  }
}

