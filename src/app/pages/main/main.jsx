import React from "react";
import { Route } from "react-router-dom"

import { Sidebar } from "./sidebar"
import { Home } from "./home"
import { Personal } from "../personal/personal"
import { Works } from "../works/works"
import { Example } from "../example/example"
import { Search} from "../search/search"
import {Filter} from "../filter/filter"

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
              <header className="topnavbar-wrapper">
                <nav role="navigation" className="navbar topnavbar">
                  <div className="topnavbar-header">
                    <a href="/" className="navbar-brand">
                      <div className="brand-logo">
                        <img className="img-logo" src={ require("./logo-grey.png") } alt="Qingteng Site" />
                      </div>
                    </a>
                  </div>
                </nav>
              </header>
              <Sidebar/>
              <section className="main-content">
                <Route path="/" exact component={ Home } />
                <Route path="/personal" component={ Personal } />
                <Route path="/works" component={ Works } />
                <Route path="/example" component={ Example } />
                <Route path="/search" component={ Search } />
                <Route path="/filter" component={ Filter } />
              </section>
            </div>
        )
    }

}