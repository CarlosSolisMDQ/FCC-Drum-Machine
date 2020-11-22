function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //este es el array de objetos con los sonidos y propiedades

let data = [
{
  id: 'Heater-1',
  url:
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  letter: "Q" },

{
  id: "Heater-2",
  url:
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  letter: "W" },

{
  id: "Heater-3",
  url:
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  letter: "E" },

{
  id: "Heater-4",
  url:
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  letter: "A" },

{
  id: "clap",
  url:
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  letter: "S" },

{
  id: "Open-HH",
  url:
  'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  letter: "D" },

{
  id: "Kick-n'-Hat",
  url:
  'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  letter: "Z" },

{
  id: "Kick",
  url:
  'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  letter: "X" },

{
  id: "Open-HH",
  url:
  'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  letter: "C" }];



//este es el componente app que renderiza el tipo de sonido y con map los botones iterando el array

class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",





    display => this.setState({ display }));this.state = { display: "Toque una tecla" };}

  render() {
    return React.createElement("div", { className: "general" },

    React.createElement("h1", null, "FCC Drum Machine"),

    React.createElement("div", { id: "drum-machine" },
    React.createElement("div", { id: "title", className: "d-flex justify-content-center" }),


    React.createElement("div", { id: "drum-machine" },

    React.createElement("div", { id: "drum-pads" },
    data.map((item) =>
    //a drumpad le entran propiedades, el sonido, el ID, la letra y actualiza el estado de display
    React.createElement(DrumPad, {
      id: item.id,
      src: item.url,
      letter: item.letter,
      handleDisplay: this.handleDisplay }))))),






    React.createElement("h1", { id: "display" }, this.state.display));

  }}



class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeydown",












    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);

      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener("keydown", this.handleKeydown);window.focus();} /*
                                                                                                         componentWillUnmount() {
                                                                                                           document.removeEventListener("keydown", this.handleKeydown);
                                                                                                         }
                                                                                                       */render() {return React.createElement("div", { className: "drum-pad", id: this.props.id, onClick: this.handleClick },
    React.createElement("p", null, this.props.letter),
    React.createElement("audio", {
      class: "clip",
      ref: ref => this.audio = ref,
      src: this.props.src,
      id: this.props.letter }));



  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));