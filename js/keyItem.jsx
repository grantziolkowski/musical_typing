var KeyItem = React.createClass({
  play: function() {
    var audio = React.findDOMNode(this.refs.audio)
    audio.play();
  },
  render: function() {
    var cx = 'key ' + this.props.color;
    return (
      <div className={cx} onClick={this.play}>
        <div className="keyname">{this.props.note}
        </div>

        <div className="kbkeyname">{this.props.keyboard}
        </div>

        <AudioItem id={this.props.note} ref="audio"/>

      </div>
      )
  }
})