import React, { Component } from "react";
import "../styles/search.scss";

//validate pop type according data
const validateDataType  = (data) => {

  return 
};

export class SearchArea extends Component {
  //初始化组件，props是由外部传来的属性；
  //name->传入   validation->判断类型（number/string，不传入默认string）clickSearch->点击search按钮需要调用的方法。
  //data 传入要显示的data，不传入的话显示search框
  //{data: data.filters}

  constructor(props) {
    super(props);
    this.inputType =
      this.props.validation == "number" ? this.props.validation : "text";
    this.state = {
      val: "所有",
      popStatus: false,
      addedEvent: false
    };
    this.inputValue = "";
    this.idName = "div" + this.props.name;
    this.popType = validateDataType;
  }

  eventFunction(event) {
    if (
      event.target.className != "prop-name" &&
      event.target.className != "len-limit" &&
      event.target.className != "input-style" &&
      event.target.className != "btn search-btn" &&
      event.target.className != "fa fa-search"
    ) {
      this.setState({ popStatus: false, addedEvent: true });
      this.removeListener();
      // this.state.popStatus = false;
    }
  }

  addListener() {
    document.addEventListener("click", this.eventFunction.bind(this));
  }

  removeListener() {
    document.removeEventListener("click", this.eventFunction.bind(this));
  }

  handleClick(e) {
    //改变popStatus状态，控制pop显示隐藏
    if (this.state.popStatus) {
      this.setState({
        popStatus: false
      });
    } else {
      this.setState({
        popStatus: true
      });
    }
    //清除操作不需要隐藏pop
    if (e.target.className == "fa fa-times") {
      //根据标签查找清除按钮
      this.clearInput();
    }
  }

  inputChange(e) {
    let value = e.target.value;
    this.inputValue = value;
    this.setState({
      val: value || "所有"
    });
  }

  clearInput() {
    this.inputValue = "";
    this.setState({
      val: "所有",
      popStatus: true
    });
  }

  render() {
    return (
      <div className="search-wrapper">
        <div className="search-area" onClick={this.handleClick.bind(this)} id={this.idName}>
          <span className="search-title">
            <span className="prop-name">{this.props.name}:</span>
            <span className="len-limit">{this.state.val}</span>
            <span className="data-info">
              {this.state.val == "所有" ? (
                <i className="fa fa-search" />
              ) : (
                <i className="fa fa-times" />
              )}
            </span>
          </span>
        </div>
        {this.state.popStatus ? (
          <div className="search-input" id={this.idName}>
            <div>
              <input
                className="input-style"
                autoFocus="autoFocus"
                type={this.inputType}
                value={this.inputValue}
                onChange={this.inputChange.bind(this)}
                placeholder={"查询" + this.props.name}
              />
              <a className="btn search-btn" onClick={this.props.clickSearch}>
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
        ) : (
          <div />
        )}
        {this.state.popStatus && this.addListener()}
        {/* {this.state.addedEvent && this.removeListener()} */}
      </div>
    );
  }
}
