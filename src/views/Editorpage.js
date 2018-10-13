import React, { Component } from "react";

// components
import Editor from "../components/Editor";
import Renderer from "../components/Renderer";

// styles
import "../styles/editor.scss";

export default class Editorpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    };
  }

  updateCode(code) {
    this.setState({ code });
  }

  render() {
    return (
      <div className="editor-page">
        <Editor
          code={this.state.code}
          updateCode={this.updateCode.bind(this)}
        />
        <Renderer code={this.state.code} />
      </div>
    );
  }
}
