import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";

import "brace/mode/markdown";
import "brace/theme/monokai";
import "brace/keybinding/vim";

export default class Editor extends Component {
  render() {
    const { code } = this.props;
    return (
      <div className="editor">
        <AceEditor
          style={{ height: `100%` }}
          mode="markdown"
          theme="monokai"
          value={code}
          keyboardHandler="vim"
          onChange={e => this.props.updateCode(e)}
          name="editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}
