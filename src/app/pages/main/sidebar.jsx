import React from "react"
import { Route, IndexLink, Link } from "react-router-dom"


export class Sidebar extends React.Component {

    render() {
        return (
            <aside className="aside">
              <nav className="left-sdiebar">
                <ul className="nav-group">
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/personal">Personal</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/works">Works</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/example">Example</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/search">Search</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/filter">Filter</Link>
                  </li>
                </ul>
              </nav>
            </aside>
        )
    }
}
