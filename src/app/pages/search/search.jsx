import React from "react";
import {SearchArea } from "../../components/search"

export class Search extends React.Component{
    

    getAPI(){

    }

    render(){
        return(
            <div>
                <SearchArea name="CVE编号" validation="number" clickSearch={this.getAPI.bind(this)} />
                <SearchArea name="补丁名称" clickSearch={this.getAPI.bind(this)} />
            </div>
        )
    }
}