/** @jsx React.DOM */

var pianoKeys = [
  {color: "white", keyboard: "a", note: "C"},
  {color: "black", keyboard: "w", note: "Cs"},
  {color: "white", keyboard: "s", note: "D"},
  {color: "black", keyboard: "e", note: "Ds"},
  {color: "white", keyboard: "d", note: "E"},
  {color: "white", keyboard: "f", note: "F"},
  {color: "black", keyboard: "t", note: "Fs"},
  {color: "white", keyboard: "j", note: "G"},
  {color: "black", keyboard: "i", note: "Gs"},
  {color: "white", keyboard: "k", note: "A"},
  {color: "black", keyboard: "o", note: "As"},
  {color: "white", keyboard: "l", note: "B"},
  {color: "white", keyboard: ";", note: "C"}
];

var Piano = React.createClass({
  mixins: [MousetrapMixin],
  componentDidMount: function () {
    this.props.pianoKeys.forEach(function(pianoKey){
      var keyEvent = pianoKey.keyboard
      var note = pianoKey.note;
      this.bindShortcut(keyEvent, this.playAudio)
    }, this)
  },
  playAudio: function(note) {
    var v = document.getElementById(note)
    console.log(v)
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
  play: function() {
    var playing = React.findDOMNode(this.refs.audio);
    playing.play();
  },
  render: function() {
    var cx = 'key ' + this.props.color;
    return (
      <div id={this.props.note} className={cx} onClick={this.play}>
        <div className="keyname">{this.props.note}
        </div>

        <div className="kbkeyname">{this.props.keyboard}
        </div>

        <Audio id={this.props.note} ref="audio"/>
      </div>
      )
  }
})

var Audio = React.createClass({
  render: function() {
    var linkOgg = "http://pianosounds.pixelass.com/tones/grand-piano/2" + this.props.id + ".ogg";
    var linkMp3 = "http://pianosounds.pixelass.com/tones/grand-piano/2" + this.props.id + ".mp3";
    return (
      <audio id={this.props.id} preload="auto" controls>
        <source src={linkOgg} type="audio/ogg"></source>
        <source src={linkMp3} type="audio/mpeg"></source>
      </audio>
    )
  }
})

React.render(<Piano pianoKeys={pianoKeys} />, document.getElementById('piano'))