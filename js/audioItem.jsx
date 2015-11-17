var AudioItem = React.createClass({
  render: function() {
    var linkOgg = "http://pianosounds.pixelass.com/tones/grand-piano/2" + this.props.id + ".ogg";
    var linkMp3 = "http://pianosounds.pixelass.com/tones/grand-piano/2" + this.props.id + ".mp3";
    return (
      <audio id={this.props.id} preload="auto" className="audio" controls>
        <source src={linkOgg} type="audio/ogg"></source>
        <source src={linkMp3} type="audio/mpeg"></source>
      </audio>
    )
  }
})