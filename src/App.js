import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MultiForm from "./Component/MultiForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import MachCouplePage from "./Component/MachCouplePage";
import ContactPage from "./Component/ContactPage";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  let menuRef = useRef();

  // useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setShowMenu(false);
  //       console.log("outside");
  //     }
  //     console.log("inside");
  //   });
  // });

  return (
    <Router>
      <div className="container">
        <div className="d-flex res_flex">
          <div className="col-md-8 col-12 ms-auto odrer-1">
            <Switch>
              <Route exact path="/">
                <MultiForm />
              </Route>
              <Route path="/match-couple">
                <MachCouplePage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route path="*">
                <h3 className="text- mt-4 p-4">Page not found</h3>
              </Route>
            </Switch>
          </div>
          <div className="me-auto  ms-0 ms-md-4 mt-4 text-start">
            <p className="mb-0">
              <FontAwesomeIcon
                onClick={() => setShowMenu(!showMenu)}
                className=" menu"
                icon={faBars}
              />
            </p>
            <div ref={menuRef}>
              {showMenu && (
                <div >
                  <p>
                    <NavLink
                      activeClassName="fw-bold"
                      exact
                      to="/"
                      className="text-decoration-none text-dark "
                    >
                      Default Page
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      activeClassName="fw-bold"
                      to="/match-couple"
                      className="text-decoration-none text-dark"
                    >
                      Match couple page
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      activeClassName="fw-bold"
                      to="/contact"
                      className="text-decoration-none text-dark"
                    >
                      Contact page
                    </NavLink>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
