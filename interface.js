function injectStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
    :root {
  --panel-width: 130px;
  --font: 'Helvetica', 'Arial';
  --text-color: rgb(160, 160, 160);
  --bg-dark: black;
  --hover-bg: rgba(20, 20, 20, 0.7);
  --active-bg: rgba(128, 128, 128, 0);
  --radius: 10px;
}

/* === Base shared styles === */
.panel-text {
  font-family: var(--font);
  font-weight: bold;
  letter-spacing: -0.8px;
  user-select: none;
  padding-left: 12px;
}

/* === Sketch Title === */
.side-elements {
  font-family: var(--font);
  font-size: 13px;
  letter-spacing: -0.8px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width:auto;
  padding:4px 12px 3px 12px;
  margin:0;
  background-color: hsla(0, 0.00%, 50.20%, 0.30);
  border-radius: var(--radius);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  user-select: none;
}

.sketch-title {
  position: absolute;
  top: 10px;
  left: 10px; 
}

.hide-button{
  width: auto;
  position: absolute;
  right: 10px;
  top: 10px;
  text-align:left;
}

.hide-button:hover,
.copyright-button:hover{
  background: var(--hover-bg);
  color: black;
}

.hide-button:active,
.copyright-button:hover{
  background-color: var(--text-color);
  border-color: black;
  color: black;
  }

.copyright-button{
  width: auto;
  position: absolute;
  right: 10px;
  bottom: 10px;
  text-align:left;
}

.copyright-button:link,
.copyright-button:visited{
  color: black;
  text-decoration:none
}

/* === Panel container === */
.panel-background {
  background-color: hsla(0, 0.00%, 50.20%, 0.30);
  border-radius: var(--radius);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* === Title === */
.panel-title {
  font-size: 13px;
  padding-top: 7px;
  border-top: solid;
  border-width: 1.5px;
}

/* === Label text === */
.panel-label-text {
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* === Slider === */
.panel-slider {
  -webkit-appearance: none;
  height: 1.5px;
  background: var(--bg-dark);
  border-radius: 20px;
  border-width: 0.1px;
  margin-left: 12px;
}

.panel-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 14px;
  width: 14px;
  background: var(--bg-dark);
  border: 2px solid rgba(128, 128, 128, 0);
  border-radius: var(--radius);
}

/* === Buttons & Checkbox containers === */
.panel-button-general,
.panel-checkbox {
  margin-left: 12px;
  margin-top: -5px;
}

/* === Checkbox base === */
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 100%;
  height: 18px;
  border: 1.5px solid transparent;
  border-radius: var(--radius);
  display: grid;
  place-content: center;
}

/* === Checkbox inner content === */
input[type="checkbox"]::before {
  content: "+";
  color: gray;
  background-color: var(--bg-dark);
  width: var(--panel-width);
  height: 11px;
  margin-bottom: 0;
  border-radius: 20px;
  text-align: center;
  font-size: 10px;
  font-family: var(--font);
  font-weight: bold;
  letter-spacing: -0.8px;
  padding: 0 0 2px 0;
  border: 1.5px solid var(--bg-dark);
}

/* === Checkbox states === */
input[type="checkbox"]:checked::before {
  color: black;
  background-color: transparent;
}

input[type="checkbox"]:checked:hover::before {
  background-color: rgba(20, 20, 20, 0.2);
}

input[type="checkbox"]:hover::before {
  background-color: var(--hover-bg);
}

/* === Buttons === */
.panel-button {
  -webkit-appearance: none;
  font-family: var(--font);
  font-weight: bold;
  font-size: 11px;
  border: 1px solid black;
  border-radius: var(--radius);
  background: var(--bg-dark);
  color: var(--text-color);
  width: 40px;
  padding: 0;
  height:15px;
}

.panel-button:hover {
  background: var(--hover-bg);
  color: black;
}

/* === Select dropdown === */
.panel-select {
  margin-top: -5px;
  border-radius: 20px;
  border: none;
  background-color: var(--bg-dark);
  color: var(--text-color);
  font-size: 11px;
  font-family: var(--font);
  font-weight: bold;
  letter-spacing: -0.1px;
  padding-left: 12px;
  height: 15px;
  margin-left:12px;
}

/* === Text Input === */
.panel-input{
  -webkit-appearance: none;
  margin-top: -5px;
  margin-left:12px;
  border-radius: 20px;
  border: none;
  background-color: var(--bg-dark);
  color: var(--text-color);
  padding-left: 12px;
  font-size: 11px;
  font-family: var(--font);
  font-weight: bold;
  letter-spacing: -0.1px;
  height:15px;
}

.panel-input:focus{
  background-color: transparent;
  border-color:black;
  outline: 1.5px solid currentColor;
  outline-offset: 0;
  color: black;
}


/* === File Input === */

.panel-button-file{
  text-align: left;
  padding-left: 14px;
}
.panel-file-input {
  -webkit-appearance: none;
  margin-top: -5px;
  margin-left:12px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  color: black;
  font-size: 11px;
  font-family: var(--font);
  font-weight: bold;
  letter-spacing: -0.1px;
  height: 15px;
  padding-bottom:1px;
  width:300px;
}

.panel-file-input::file-selector-button{
  -webkit-appearance: none;
  content: "Select Image";
  border: solid black;
  border-radius: 20px;
  background-color: var(--bg-dark);
  color: var(--text-color);
  font-size: 11px;
  font-family: var(--font);
  font-weight: bold;
  letter-spacing: -0.1px;

  height: 16px;
  padding-left: 12px;
  padding-right: 12px;

}
.panel-file-input::file-selector-button:hover{
  background: var(--hover-bg);
  color: black;
}
/* === Color Picker === */
.panel-color-picker{
  -webkit-appearance: none;
  border:none;
  outline: 1.5px none currentColor;
  background-color:transparent;
  border-radius: 20px;
  margin-top:-8px;
  height:23px;
  padding:0 15px 0 10px ;   
}

.panel-color-picker::-webkit-color-swatch{
  margin:0px;
  padding-left:50px;
  border: 1.5px solid var(--bg-dark);
  border-radius: 20px;
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

    this.sketchTitle = createDiv(this.title)
    this.sketchTitle.addClass("side-elements");
    this.sketchTitle.addClass("sketch-title")

    this.hide = createDiv("Toggle UI")
    this.hide.addClass("side-elements")
    this.hide.addClass("hide-button")
    this.hide.mousePressed(() => {
      this.hidePanel()
    })

    this.debug = createDiv("Toggle Values")
    this.debug.addClass("side-elements")
    this.debug.addClass("hide-button")
    this.debug.style('top', '40px')
    this.debug.mousePressed(() => {
      this.changeDebugState()
    })

    this.copyright = createA("https://giuseppelaezza.com/", "©2025 GL", "_blank")
    this.copyright.addClass("side-elements");
    this.copyright.addClass("copyright-button")
  }


  createPanel(name,collapseState = false) {
    for (let panel of this.panels) {
      panel.updateHeight();
    }

    let yoffset = 0;
    if (this.panels.length > 0) {
      let lastPanel = this.panels[this.panels.length - 1];
      yoffset = lastPanel.h + lastPanel.y;
    }

    let a = new Panel(10, 150, name);


      a.collapseState = collapseState


    this.panels.push(a);
    for (let i = 0; i < this.panels.length; i++) {
      this.updatePanel()
    }
  }

  checkIndex(index){
    if(index>this.panels.length-1){
      return this.panels.length-1
    } else {
      return index
    }
  }

  addSlider(index, name, mini, maxi, value, step) {
    this.panels[this.checkIndex(index)].addSlider(name, mini, maxi, value, step);
    this.updatePanel();
  }

  addButton(index, name, callbackfunction) {
    this.panels[this.checkIndex(index)].addButton(name, callbackfunction);
    this.updatePanel();
  }

  addCheckbox(index, name, value) {
    this.panels[this.checkIndex(index)].addCheckbox(name, value);
    this.updatePanel();
  }

  addSelect(index, name) {
    this.panels[this.checkIndex(index)].addSelect(name);
    this.updatePanel();
  }

  addOption(index, controlIndex, name, value) {
    this.panels[this.checkIndex(index)].controls[controlIndex].option(name, value);
    this.updatePanel();
  }

  addText(index, name, value) {
    this.panels[this.checkIndex(index)].addText(name, value);
    this.updatePanel();
  }

  addNumber(index, name, value) {
    this.panels[this.checkIndex(index)].addNumber(name, value);
    this.updatePanel();
  }

  addFile(index, name,callbackFn = null) {
    this.panels[this.checkIndex(index)].addFile(name, this.panels[index].controls.length,callbackFn);
    this.updatePanel();
  }

  addColorPicker(index, name, value) {
    this.panels[this.checkIndex(index)].addColorPicker(name, value);
    this.updatePanel();
  }

  addSaveButton(index, extension = "png",duration = 2) {
    this.panels[this.checkIndex(index)].addSaveButton(extension,duration);
    this.updatePanel();
  }

  accessImage(panelIndex, imageIndex) {
    const control = this.panels[panelIndex].images[imageIndex];
    return control
  }

  accessValue(panelIndex, controlIndex, setValue = null) {
    const control = this.panels[panelIndex].controls[controlIndex];

    if (setValue === null) {
      if (control.attribute("type") == "number") {
        return control.value?.() - 0 ?? control.checked?.();
      } else {
        return control.value?.() ?? control.checked?.();
      }
    } else {
      if (typeof control.value === "function") {
        control.value(setValue);
      } else if (typeof control.checked === "function") {
        control.checked(setValue);
      }
      return this.accessValue(panelIndex, controlIndex);
    }
  }

  addOnchangeFunction(panelIndex, controlIndex,callbackFn = "null"){
    const control = this.panels[panelIndex].controls[controlIndex];

    control.attribute("onchange",callbackFn)
  }

  mousehover(){
    let panelstates = []
    
      for(let item of this.panels){
       if( item.checkHover()) {
        panelstates.push(true)
       }}

       if(panelstates.length>0){
        return true
       } else {
        return false
       }
      
    
  }

  hidePanel() {
    for (let panel of this.panels) {
      panel.hide();
    }

    for (let i = 0; i < this.panels.length; i++) {
      this.updatePanel()
    }
  }

  changeDebugState() {
    for (let panel of this.panels) {
      panel.debug();
    }
    for (let i = 0; i < this.panels.length; i++) {
      this.updatePanel()
    }
  }

  shortcut() {
    if (keyCode == 191) {
      this.hidePanel();
    } else if (keyCode == 220) {
      this.changeDebugState();
    }
  }


  updatePanel() {
    for (let panel of this.panels) {
      panel.update();
      panel.updateHeight();
    }

    for (let i = 1; i < this.panels.length; i++) {

      let last = this.panels[i - 1];
      let current = this.panels[i];
      if (this.panels.length > 1) {

        current.y = last.h + last.y + 10;

        if (current.y + current.h > windowHeight) {
          if (last.y == 10) {
            current.y = last.y + last.h + 40
            current.xOriginal = last.xOriginal

          } else {
            current.xOriginal = (last.xOriginal + last.w + 62*current.debugState) + 10
            current.y = 40
          }
        } else {
          current.xOriginal = last.x
        }
      }

    }
  }

}

class Panel {
  constructor(x, w = 130, title = "") {
    this.x = x;
    this.y = 40;
    this.w = w;
    this.h = 0;
    this.lineHeight = 45;
    this.bottomPadding = 110;

    this.xOriginal = x;
    this.hideState = true;
    this.collapseState = false;
    this.debugState = false;
    this.hoverState = false;

    this.controls = [];
    this.names = [];
    this.values = [];
    this.images = [];

    this.panelBackground = createDiv("");
    this.panelBackground.addClass("panel-background");

    this.valueBackground = createDiv("");
    this.valueBackground.addClass("panel-background");

    this.title = createDiv(ui.panels.length + " - " + title);
    this.title.addClass("panel-text");
    this.title.addClass("panel-title");

    this.collapseButton = createDiv("+")
    this.collapseButton.addClass("panel-button")
    this.collapseButton.mousePressed(() => {
      this.collapseState = !this.collapseState
      for (let i = 0; i < ui.panels.length; i++) {
        ui.updatePanel()
      }
    });

    this.saveButton = null;
  }


  createLabel(name) {
    let span = createSpan(this.controls.length + " - " + name);
    span.addClass("panel-label-text");
    span.addClass("panel-text");

    span.size(this.w - 30);

    let spanValues = createSpan("");
    spanValues.addClass("panel-label-text");
    spanValues.addClass("panel-text");
    spanValues.addClass("panel-values");

    spanValues.size(this.w - 30);

    this.names.push(span);
    this.values.push(spanValues);
  }


  addSlider(name, minVal, maxVal, value, step) {
    let control = createSlider(minVal, maxVal, value, step);

    control.addClass("panel-slider");
    control.size(this.w - 30);

    this.createLabel(name);
    this.controls.push(control);
  }


  addButton(name, callbackFn = null) {
    let control = createButton(" + ");

    control.addClass("panel-button");
    control.addClass("panel-button-general");
    control.size(this.w - 30);
    control.mousePressed(callbackFn);

    this.createLabel(name);
    this.controls.push(control);
  }

  addCheckbox(name, defaultVal) {
    let control = createCheckbox("", defaultVal);

    control.addClass("panel-checkbox");
    control.size(this.w - 30);

    document.documentElement.style.setProperty(
      "--panel-width",
      this.w - 30 + "px"
    );

    this.createLabel(name);
    this.controls.push(control);
  }

  addSelect(name) {
    let control = createSelect(false);

    control.addClass("panel-select");
    control.size(this.w - 30);

    this.createLabel(name);
    this.controls.push(control);
  }

  addText(name, value) {
    let control = createInput(value);

    control.addClass("panel-input");
    control.size(this.w - 42);

    this.createLabel(name);
    this.controls.push(control);
  }

  addNumber(name, value) {
    let control = createInput(value, "number");

    control.addClass("panel-input");
    control.size(this.w - 42);

    this.createLabel(name);
    this.controls.push(control);
  }

  addFile(name, index,callbackFn = null) {
    let id = index;
    let fileInput = createFileInput((file) => {
      if (file.type == 'image') {
        let img = loadImage(file.data,callbackFn);

        if (this.images.length == 0) {
          for (let i = 0; i < id; i++) {
            this.images[i] = undefined;
          }
          this.images[id] = img;
        } else {
          this.images.splice(id, 1, img)
        }
      }
     
    });
    fileInput.hide();


    let control = createButton("Upload");
    control.addClass("panel-button");
    control.addClass("panel-button-general");
    control.addClass("panel-button-file");
    control.mousePressed(() => {
      fileInput.elt.click()
      this.images[id] = null
      if(callbackFn){
        callbackFn()
      }
    })
    control.size(this.w - 30);

    this.createLabel(name);
    this.controls.push(control);
  }

  addColorPicker(name, value = [255,80,0]) {
    let control = createColorPicker(color(value));

    control.addClass("panel-color-picker");
    control.size(this.w);

    this.createLabel(name);
    this.controls.push(control);
  }

  addSaveButton(extension,duration) {
    this.saveButton = [createButton(" + "), createSpan("Save")];
    if(extension == "gif"){
      this.saveButton[0].mousePressed(() => saveGif(ui.title + "."+extension, duration));
    } else {
      this.saveButton[0].mousePressed(() => save(ui.title + "."+extension));
    }
    
    this.saveButton[0].addClass("panel-button");
    this.saveButton[1].addClass("panel-label-text");
    this.saveButton[1].addClass("panel-text");
    this.saveButton[1].size(30);
  }

  updateHeight() {
    this.resetPadding();
    if (this.collapseState) {
      this.h = 50
    } else {
      this.h = max(this.controls.length * this.lineHeight + this.bottomPadding, 50);
    }

  }

  resetPadding() {
    if (this.controls.length == 0) {
      if (this.saveButton) {
        this.bottomPadding = 65;
      } else {
        this.bottomPadding = 45;
      }
    } else {
      if (this.saveButton) {
        this.bottomPadding = 110;
      } else {
        this.bottomPadding = 80;
      }
    }
  }

  renderPanel() {
    this.updateHeight();
    this.panelBackground.position(this.x, this.y);
    this.panelBackground.size(this.w, this.h);

    this.title.position(this.x, this.y + this.h - 32);
    this.title.size(this.w - 12);

    this.collapseButton.position(this.x + 110, this.y + this.h - 24)
    this.collapseButton.size(30);
    this.collapseButton.attribute('align', 'center')

    if (this.collapseState) {
      this.collapseButton.html(" + ")
    } else {
      this.collapseButton.html(" - ")
    }

    if (this.debugState) {
      this.valueBackground.position(this.x + this.w, this.y);
      this.valueBackground.size(62, this.h);
    } else {
      this.valueBackground.size(0, this.h);
    }
  }

  renderControls() {
    if (this.controls.length > 0) {
      for (let i = 0; i < this.controls.length; i++) {
        this.controls[i].position(this.x, this.y + 20 + this.lineHeight * i);

        this.names[i].position(this.x, this.y + 32 + this.lineHeight * i);

        this.controls[i].attribute("oninput", "ui.updatePanel()")



        this.values[i].position(
          this.x + this.w - 10,
          this.y + 32 + this.lineHeight * i - 17
        );
        this.values[i].size(55, 20);
        this.values[i].attribute("align", "center");

      }
    }
  }

  updateValues() {

    for (let i = 0; i < this.controls.length; i++) {
      if (this.debugState) {
        if (this.controls[i].value() == undefined) {
          this.values[i].html(this.controls[i].checked());
        } else {
          this.values[i].html(this.controls[i].value());
        }
      } else {
        this.values[i].html("")
      }
    }
  }

  renderSaveButton() {
    if (this.saveButton) {
      this.saveButton[0].position(
        this.x + 45,
        this.y +
        this.controls.length * this.lineHeight +
        this.bottomPadding -
        55
      );
      this.saveButton[0].size(35);

      this.saveButton[1].position(
        this.x,
        this.y +
        this.controls.length * this.lineHeight +
        this.bottomPadding -
        55
      );


      for (let item of this.saveButton) {
        if (this.collapseState) {
          item.attribute("hidden", "true")
        } else {
          item.removeAttribute("hidden")
        }
      }
    }
  }

  update() {
    this.resetPadding();
    this.updateHeight();
    this.hidePosition();
    this.renderPanel();
    this.renderControls();
    this.renderSaveButton();
    this.collapsePanel()
    this.updateValues();
  }

  collapsePanel() {
    for (let panel of this.controls) {
      if (this.collapseState) {
        panel.attribute("hidden", "true")
      } else {
        panel.removeAttribute("hidden")
      }
    }

    for (let panel of this.names) {
      if (this.collapseState) {
        panel.attribute("hidden", "true")
      } else {
        panel.removeAttribute("hidden")
      }
    }

    for (let panel of this.values) {
      if (this.collapseState) {
        panel.attribute("hidden", "true")
      } else {
        panel.removeAttribute("hidden")
      }
    }
  }

  hidePosition() {
    if (this.hideState) {
      this.x = this.xOriginal;
    } else {
      this.x = -this.w - 80;
    }
  }

  hide() {
    this.hideState = !this.hideState;
  }

  debug() {
    this.debugState = !this.debugState;
  }

  checkHover(){
    let offset;
    this.updateHeight()
    if(!this.hideState){
      return false
    } else {
      let offset
      if(this.debugState){
        offset = 62
      } else {
        offset = 0
      }
    
    if(mouseX>this.x &&
      mouseX< this.x + this.w + offset &&
      mouseY > this.y &&
      mouseY< this.y + this.h
    ) {
      return true
    } else {
      return false
    }
  }}
}
