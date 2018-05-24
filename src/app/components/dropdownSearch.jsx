import React, { Component } from "react";
import "../styles/search.scss";

export class DropdownSearch extends Component {
  //初始化组件，props是由外部传来的属性；
  //name->传入   validation->判断类型（number/string，不传入默认string）clickSearch->点击search按钮需要调用的方法。
  //
  constructor(props) {
    super(props);
    this.inputType =
      this.props.validation == "number" ? this.props.validation : "text";
    this.state = {
      val: "所有"
    };
    this.inputValue = "";
    this.idName = "div" + this.props.name;
  }

  componentDidMount() {
    this.addListener();
  }

  addListener() {
    var myDiv = document.getElementById(this.idName);
    if (myDiv) {
      document.addEventListener("click", e => {
        if (e.target.className == "fa fa-times") {
          //根据标签查找清除按钮
          let divId = this.findDivId(e);
          this.clearInput(divId);
        }
        //遍历冒泡的path---由内而外的元素
        for (let item of e.path) {
          //点击指定div，且此时pop的dov是隐藏时将其显示
          //点击指定div以外的元素都将使pop的div隐藏
          if (item.className == "search-wrapper") {
            myDiv = document.getElementById(item.lastChild.id);
            myDiv.style.display = "inline-block";
            break;
          } else {
            myDiv.style.display = "none";
          }
        }
      });
      myDiv.addEventListener("click", event => {
        event = event || window.event;
        event.stopPropagation();
      });
    }
  }

  findDivId(e) {
    for (let item of e.path) {
      if (item.className == "search-wrapper") {
        return item.lastChild.id;
      }
    }
  }

  inputChange(e) {
    let value = e.target.value;
    this.inputValue = value;
    this.setState({
      val: value || "所有"
    });
  }

  clearInput(id) {
    if (id) {
      document.getElementById(id).style.display = "inline-block";
    }
    this.inputValue = "";
    this.setState({
      val: "所有"
    });
  }

  render() {
    return (
      <div className="search-wrapper">
        <div className="search-area">
          <span>
            <span>{this.props.name}:</span>
            <span className="len-limit">{this.state.val}</span>
            <span>
              {this.state.val == "所有" ? (
                <i className="fa fa-search" />
              ) : (
                <i className="fa fa-times" />
              )}
            </span>
          </span>
        </div>
        <div className="search-input" id={this.idName}>
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
    );
  }
}
