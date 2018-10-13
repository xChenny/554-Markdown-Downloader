import React, { Component } from "react";
import showdown from "showdown";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const converter = new showdown.Converter();

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
    // choose to compile to html or leave the string as input to blob
    const blobInput =
      format === "src" ? this.props.code : converter.makeHtml(this.props.code);

    // create blob from code
    const blob = new Blob([blobInput]);
    const blobURL = URL.createObjectURL(blob);

    // create the new filename
    const extension = format === "src" ? "md" : "html";
    const filename = `${this.state.title.replace(/ /g, "_")}.${extension}`;

    // create a link and click it
    let link = document.createElement("a");
    link.href = blobURL;
    link.download = filename;
    link.click();
  }

  render() {
    return (
      <div className="navbar">
        <input
          className="filename"
          placeholder="Enter Filename..."
          value={this.state.title}
          onChange={e => this.onTitleChange(e)}
        />

        {/* <select name="keybindings" id="keybinds" onChange={e => this.props.keybindingsOnChange(e)}>
          <option default value="">Normal</option>
          <option value="vim">Vim</option>
          <option value="emacs">Emacs</option>
        </select> */}

        <div className="buttons">
          <button onClick={() => this.download("src")}>
            Download Markdown
          </button>
          <button onClick={() => this.download("html")}>Download HTML</button>
        </div>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}
