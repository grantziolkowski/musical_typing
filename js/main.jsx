/** @jsx React.DOM */

var pianoKeys = [
  {color: "white", keyboard: "a", note: "C"},
  {color: "black", keyboard: "w", note: "C#"},
  {color: "white", keyboard: "s", note: "D"},
  {color: "black", keyboard: "e", note: "Eb"},
  {color: "white", keyboard: "d", note: "E"},
  {color: "white", keyboard: "f", note: "F"},
  {color: "black", keyboard: "t", note: "F#"},
  {color: "white", keyboard: "j", note: "G"},
  {color: "black", keyboard: "i", note: "Ab"},
  {color: "white", keyboard: "k", note: "A"},
  {color: "black", keyboard: "o", note: "Bb"},
  {color: "white", keyboard: "l", note: "B"},
  {color: "white", keyboard: ";", note: "C2"}
];

var Piano = React.createClass({
  mixins: [MousetrapMixin],
  componentDidMount: function () {

    this.props.pianoKeys.forEach(function(pianoKey){
      var keyEvent = pianoKey.keyboard
      this.bindShortcut(keyEvent, function () { console.log("in") });
    }, this)
  },
  render: function() {
    var wkeys=[];
    var bkeys=[];
    this.props.pianoKeys.forEach(function(pianoKey, index){
      if (pianoKey.color == "black") {
        bkeys.push(<Key note={pianoKey.note} color={pianoKey.color} keyboard={pianoKey.keyboard} />)
      } else {
        wkeys.push(<Key note={pianoKey.note} color={pianoKey.color} keyboard={pianoKey.keyboard} />)
      }
    });
    return (
     <div id="pianoBody">
        <div className="octave">
          {wkeys}
          <div className="flats">
            {bkeys}
          </div>
        </div>
      </div>
      )
  }
})

var Key = React.createClass({
  render: function() {
    var cx = 'key ' + this.props.color;
    return (
      <div id={this.props.note} className={cx}>
        <div className="keyname">{this.props.note}
        </div>

        <div className="kbkeyname">{this.props.keyboard}
        </div>
      </div>
      )
  }
})

React.render(<Piano pianoKeys={pianoKeys} />, document.getElementById('piano'))