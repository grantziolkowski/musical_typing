/** @jsx React.DOM */

var pianoKeys = [
  {color: "white", keyboard: "A", note: "C"},
  {color: "black", keyboard: "W", note: "C#"},
  {color: "white", keyboard: "S", note: "D"},
  {color: "black", keyboard: "E", note: "Eb"},
  {color: "white", keyboard: "D", note: "E"},
  {color: "white", keyboard: "F", note: "F"},
  {color: "black", keyboard: "T", note: "F#"},
  {color: "white", keyboard: "J", note: "G"},
  {color: "black", keyboard: "I", note: "Ab"},
  {color: "white", keyboard: "K", note: "A"},
  {color: "black", keyboard: "O", note: "Bb"},
  {color: "white", keyboard: "L", note: "B"},
  {color: "white", keyboard: ";", note: "C2"}
];

var Piano = React.createClass({
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