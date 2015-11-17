/** @jsx React.DOM */

var Piano = React.createClass({
  mixins: [MousetrapMixin],
  getInitialState: function() {
    return {
      typedText: '',
      audioCurrent: null,
      isPlaying: false
    }
  },
  componentDidMount: function () {
    this.props.pianoKeys.forEach(function(pianoKey){
      var keyEvent = pianoKey.keyboard
      var self = this
      this.bindShortcut(keyEvent, function() {
        self.toggle(pianoKey)
        })
    }, this)
  },
  toggle: function(pianoKey) {
    var noteName = pianoKey.noteName || pianoKey.note
    this.setState({
      typedText: this.state.typedText + ' ' + noteName,
      audioCurrent: document.getElementById(pianoKey.note),
      isPlaying: !this.state.isPlaying
    })
    this.state.audioCurrent.play()
    this.checkTextLimit()
  },
  checkTextLimit: function() {
   if (this.state.typedText.length > this.props.limit) {
        this.setState({typedText: ''})
      }
  },
  render: function() {
    var wkeys=[];
    var bkeys=[];
    this.props.pianoKeys.forEach(function(pianoKey, index){
      if (pianoKey.color == "black") {
        bkeys.push(<KeyItem note={pianoKey.note} color={pianoKey.color} keyboard={pianoKey.keyboard} />)
      } else {
        wkeys.push(<KeyItem note={pianoKey.note} color={pianoKey.color} keyboard={pianoKey.keyboard}/>)
      }
    });
    return (
      <div>
      <div id="typedText">
        <h2>{this.state.typedText}</h2>
      </div>
      <div id="piano">
         <div id="pianoBody">
            <div className="octave">
              {wkeys}
              <div className="flats">
                {bkeys}
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

React.render(<Piano pianoKeys={pianoKeys} limit={70}/>, document.getElementById('container'))