import React from "react";
import {observer} from "mobx-react"
// import {FilterRC} from "@components";
import FilterRC from "../../components/filter-rc"
import { FilterStore } from "./filter.store"


// @observer
export class Filter extends React.Component{
    constructor(){
        super();
        //personal init
        this.store = new FilterStore();
    }

    handleClick(e){
        if(e.target.value){
            value = e.target.value;
            this.store.handleClick(value);
        }
    }

    handleChange(item){
        this.store.handleChange(item);
    }

    render(){

        return(
            <div>
                <span>Filter</span>
                <FilterRC name="主机名" type="search" onClick ={this.handleClick.bind(this)} onChange={this.handleChange.bind(this)} />
                {/* <FilterRC name="主机IP" type="search" onClick ={this.handleClick.bind(this)} onChange={this.handleChange.bind(this)} />
                <FilterRC name="标签" data ={this.store.data.hostTag} type="multiple" onClick ={this.handleClick.bind(this)} onChange={this.handleChange.bind(this)} />
                <FilterRC name="负责人" data ={this.store.data.chargeName} type="multiple" onClick ={this.handleClick.bind(this)} onChange={this.handleChange.bind(this)} />
                <FilterRC name="业务组" data ={this.store.data.group} type="tree" onClick ={this.handleClick.bind(this)} onChange={this.handleChange.bind(this)} /> */}
            </div>
        )
    }
}