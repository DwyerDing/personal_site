import React from "react";
import Dropdown from "rc-dropdown";

import "./filter-rc.scss";

class FilterRC extends React.Component {
  constructor(props) {
    super(props);

    this.checkedList = [];
  }

  loadPopArea(data, type) {
    return (
      <div className="pop-filter">{this.diffTypeOfCoponent(data, type)}</div>
    );
  }

  diffTypeOfCoponent(data, type) {
    //validate which component will be mounted by type
    switch (type) {
      case "tree":
        return <BasicTree data={data} />;
        break;
      case "search":
        return <Search data={data} />;
        break;
      case "multiple":
        return <MultipleChoice data={data} />;
        break;
      case "time":
        return <Timer />;
        break;
      case "loadMore":
        return <LoadMore />;
        break;
    }
  }

  clear(){
      if(this.checkedList && this.checkedList.length > 0){
          //clear chosen in pop
          //clear chosen in input
          //change
      }
  }

  render() {
    let name = this.props.name;
    let type = this.props.type;
    let data = this.props.data || "";
    return (
      //   <div className="filter-wrapper">
      // <div className="main-filter">
      //   <span>
      //     {name}:{this.checkedList.length > 1 ? (
      //       <span className="checked-num">{this.checkedList.length}</span>
      //     ) : (
      //       "所有"
      //     )}
      //   </span>
      //   <span><i className="fa fa-search" /></span>
      // </div>
      // <div className="pop-filter">
      //     {this.diffTypeOfCoponent(data, type)}
      // </div>
      //   </div>
      <div className="filter-wrapper">
        <Dropdown
          triggle={["click"]}
          overlay={this.loadPopArea(data, type)}
          animation="slide-up"
        >
          <div className="main-filter">
            <div className="filter-name">
              <span className="len-limited">{name}:</span>
              {this.checkedList.length > 1 ? (
                <span className="checked-num">{this.checkedList.length}</span>
              ) : (
                <span>"所有"</span>
              )}
            </div>
            <div className="main-filter-icon" onClick={this.clear.bind(this)}>
            {this.checkedList.length > 0 ? <i className="fa fa-times" /> : <i className="fa fa-search" />}
              
            </div>
          </div>
        </Dropdown>
      </div>
    );
  }
}

export class BasicTree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="basic-tree">checkbox tree</div>;
  }
}

export class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="basic-search">search</div>;
  }
}

export class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    return (
      <div className="basic-multiple">
        <div className="clear-checked" />
        <ul className="checked-area">
          {this.checkedList &&
            this.checkedList.map((item, index) => {
              <li className="li-item">
                <span>item.name</span>
                icon-checked
              </li>;
            })}
        </ul>
        <ul>
          {data &&
            data.map((item, index) => {
              <li className="li-item">
                <span>{item.name}</span>
              </li>;
            })}
        </ul>
      </div>
    );
  }
}

export default FilterRC;
