import React, { Component } from "react";
import { renderToString } from "react-dom/server";
import "../styles/navbar.scss";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Untitled Document",
      code: props.code,
      keybindings: props.keybindings
    };
  }

  onTitleChange(e) {
    const title = e.target.value;
    this.setState({ title });
  }

  download(format) {
    // create blob from code
    const blob = new Blob([this.props.code])
    const blobURL = URL.createObjectURL(blob)
    const extension = (format === 'src') ? "md" : "html"
    const filename = `${this.state.title.replace(/ /g, "_")}.${extension}`
    // create a link and click it
    let link = document.createElement('a');
    link.href = blobURL
    link.download = filename
    link.click()
  }

  render() {
    return (
      <div className="navbar">
        <input value={this.state.title} onChange={e => this.onTitleChange(e)} />

        {/* <select name="keybindings" id="keybinds" onChange={e => this.props.keybindingsOnChange(e)}>
          <option default value="">Normal</option>
          <option value="vim">Vim</option>
          <option value="emacs">Emacs</option>
        </select> */}

        <button onClick={() => this.download('src')}>Download Markdown</button>
        <button onClick={() => this.download('html')}>Download HTML</button>
      </div>
    );
  }
}
