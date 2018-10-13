import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/github_md.scss";

export default class Renderer extends Component {
  constructor(props) {
    super();
    this.state = {
      code: props.code
    };
  }

  updateCode(code) {
    this.setState({ code });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.code !== prevState.code) {
      return { code: nextProps.code };
    } else return null;
  }

  render() {
    return (
      <div className="renderer">
        <ReactMarkdown source={this.props.code} />
      </div>
    );
  }
}
