class gameDivination {
  constructor() {
    this.numberRandom = null;
    this.numberSend = null;
    this.attempts = 1;

    this.newattempt = () => {
      this._NumSend();
      this._NumVerif();
    };
  }

  initGame() {
    this._HideEShowDivInit();
    this._GenNumRandom();
    this._HideEShowDivAgain();

    console.log(this.numberRandom);
  }

  _HideEShowDivInit() {
    document.getElementById("info").style.display = "none";
    document.getElementById("principal").style.display = "block";
  }

  _GenNumRandom() {
    this.numberRandom = Math.floor(Math.random() * 100);
  }

  _HideEShowDivAgain() {
    document.getElementById("winDiv").style.display = "none";
    document.getElementById("message").innerHTML = "";
  }

  _NumSend() {
    let labelNumber = document.getElementById("labelNumber");
    this.numberSend = labelNumber.value;
  }

  _NumVerif() {
    if (this.numberRandom == this.numberSend) {
      let winDiv = document.getElementById("winDiv");
      let winMsg = document.getElementById("winMsg");

      winMsg.innerHTML = `Você acertou em <b> ${this.attempts} </b> tentativas.`;

      winDiv.style.display = "block";
      document.getElementById("principal").style.display = "none";
      this.attempts = 1;
      this._GenNumRandom();
      this._clearInput();
    } else if (this.numberSend > this.numberRandom) {
      let message = document.getElementById("message");
      message.innerHTML = `O numero secreto é menor que ${this.numberSend}`;
      this.attempts++;
      this._clearInput();
    } else if (this.numberSend < this.numberRandom) {
      let message = document.getElementById("message");
      message.innerHTML = `O numero secreto é maior que ${this.numberSend}`;
      this.attempts++;
      this._clearInput();
    }
  }

  _clearInput() {
    document.getElementById("labelNumber").value = "";
  }
}
const game = () => {
  const newGame = new gameDivination();
  newGame.initGame();

  document
    .getElementById("newAttempt")
    .addEventListener("click", newGame.newattempt);
};
