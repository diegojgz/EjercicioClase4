class Greeting {
  constructor(parentID, inputID, buttonID) {
    this.parentID = parentID;
    this.inputID = inputID;
    this.buttonID = buttonID;
  }

  render() {
    const parent = document.getElementById(this.parentID);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escribe tu nombre";
    input.id = this.inputID;

    const button = document.createElement("button");
    button.textContent = "Mostrar saludo";
    button.id = this.buttonID;

    const greeting = document.createElement("div");
    greeting.id = "greeting";

    parent.append(input, button, greeting);

    button.addEventListener("click", () => {
      const name = input.value;
      greeting.textContent = `¡Hola ${name}!`;
    });
  }
}

const greeting = new Greeting("app", "name-input", "show-greeting");
greeting.render();