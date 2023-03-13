
// class Button{
//     constructor(parentID,text){
//         this.parentID = parentID;
//         // completar this.text

//     }

//     render(){
//         let myApp = document.getElementById(this.parentID);

//         myApp.innerHTML = ""; // vamos a escribir en el html para que se dibuje
//         // un boton con el texto de this.text
//     }
// }

//  contruir el objeto boton
//  y llamar al metodo render de ese objeto
// let myButon = new...
// myButon.metodoQueSea()


// // ESTA PARTE LA AGREGUE YO:::
// class Button {
//   constructor(parentID, text, onClick) {
//     this.parentID = parentID;
//     this.text = text;
//     this.onClick = onClick;
//   }

//   render() {
//     const parent = document.getElementById(this.parentID);

//     const button = document.createElement("button");
//     button.innerHTML = this.text;

//     if (this.onClick) {
//       button.addEventListener("click", this.onClick);
//     }
//     parent.appendChild(button);
//   }
// }

// const myButton = new Button("myApp", "Click me!!!", () => alert("Holaaa!!!"));
// myButton.render();



