import React from "react";

const BodyConfig = () => {
  return (
    <>
      <div className="switcher-wrapper">
        <div className="switcher-btn">
          <i className="bx bx-cog bx-spin" />
        </div>
        <div className="switcher-body">
          <div className="d-flex align-items-center">
            <h5 className="mb-0 text-uppercase">Theme Customizer</h5>
            <button
              type="button"
              className="btn-close ms-auto close-switcher"
              aria-label="Close"
            />
          </div>
          <hr />
          <h6 className="mb-0">Theme Styles</h6>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="lightmode"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="lightmode">
                Light
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="darkmode"
              />
              <label className="form-check-label" htmlFor="darkmode">
                Dark
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="semidark"
              />
              <label className="form-check-label" htmlFor="semidark">
                Semi Dark
              </label>
            </div>
          </div>
          <hr />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="minimaltheme"
              name="flexRadioDefault"
            />
            <label className="form-check-label" htmlFor="minimaltheme">
              Minimal Theme
            </label>
          </div>
          <hr />
          <h6 className="mb-0">Header Colors</h6>
          <hr />
          <div className="header-colors-indigators">
            <div className="row row-cols-auto g-3">
              <div className="col">
                <div className="indigator headercolor1" id="headercolor1" />
              </div>
              <div className="col">
                <div className="indigator headercolor2" id="headercolor2" />
              </div>
              <div className="col">
                <div className="indigator headercolor3" id="headercolor3" />
              </div>
              <div className="col">
                <div className="indigator headercolor4" id="headercolor4" />
              </div>
              <div className="col">
                <div className="indigator headercolor5" id="headercolor5" />
              </div>
              <div className="col">
                <div className="indigator headercolor6" id="headercolor6" />
              </div>
              <div className="col">
                <div className="indigator headercolor7" id="headercolor7" />
              </div>
              <div className="col">
                <div className="indigator headercolor8" id="headercolor8" />
              </div>
            </div>
          </div>
          <hr />
          <h6 className="mb-0">Sidebar Backgrounds</h6>
          <hr />
          <div className="header-colors-indigators">
            <div className="row row-cols-auto g-3">
              <div className="col">
                <div className="indigator sidebarcolor1" id="sidebarcolor1" />
              </div>
              <div className="col">
                <div className="indigator sidebarcolor2" id="sidebarcolor2" />
              </div>
              <div className="col">
                <div className="indigator sidebarcolor3" id="sidebarcolor3" />
              </div>
              <div className="col">
                <div className="indigator sidebarcolor4" id="sidebarcolor4" />
              </div>
              <div className="col">
                <div className="indigator sidebarcolor5" id="sidebarcolor5" />
              </div>
              <div className="col">
                <div className="indigator sidebarcolor6" id="sidebarcolor6" />
              </div>
              <div className="col">
                <div className="indigator sidebarcolor7" id="sidebarcolor7" />
              </div>
              <div className="col">
                <div className="indigator sidebarcolor8" id="sidebarcolor8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyConfig;
