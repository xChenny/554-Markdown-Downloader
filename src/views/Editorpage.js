import React, { Component } from "react";

// components
import Editor from "../components/Editor";
import Renderer from "../components/Renderer";
import Navbar from "../components/Navbar";

// styles
import "../styles/editor.scss";

export default class Editorpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      keybindings: ""
    };
  }

  updateCode(code) {
    this.setState({ code });
  }

  // Change keybindings in State when user selects value from <select> tag
  // Available options include normal, vim, emacs
  // onKeybindingsChange(e) {
  //   const keybindings = e.target.value;
  //   this.setState({ keybindings });
  // }

  render() {
    return (
      <div className="editor-page">
        <Navbar
          code={this.state.code}
          keybindings={this.state.keybindings}
          // keybindOnChange={this.onKeybindingsChange.bind(this)}
        />
        <div className="editor-renderer-group">
          <Editor
            keybindings={this.state.keybindings}
            code={this.state.code}
            updateCode={this.updateCode.bind(this)}
          />
          <Renderer code={this.state.code} />
        </div>
      </div>
    );
  }
}
