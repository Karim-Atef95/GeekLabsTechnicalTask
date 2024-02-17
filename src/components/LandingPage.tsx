import imageCol from "../assets/stSuiteCollapse.png";
import imageExp from "../assets/stSuiteExpand.png";

import React, { useState } from "react";
function Alerts() {
  const brandName = {
    fontSize: "31px",
    fontWeight: "bold",
  };
  const [isCollapsed, setIsCollapsed] = useState(true);
  const containerClassesSideBar =
    "h-100 d-flex flex-column flex-shrink-0 pt-3 sidebar-collapse sidebarBackground sidebarColor ms-2 " +
    (isCollapsed ? "w-100" : "sidebar-expand");

  const containerImg = isCollapsed ? "img-collapse" : "";
  const containerAnchor =
    "nav-link text-white text-decoration-none" +
    (isCollapsed ? "text-center" : "");
  const containerList = "nav-item";
  // bell
  const containerBell =
    "fa-solid fa-bell pd-1 catch" + (isCollapsed ? " bell-collapse" : "");

  const containerBellParagraph =
    "ms-2 " + (isCollapsed ? " bell-paragraph-collapse" : "");
  //training
  const containerTraining =
    "fa-solid fa-user-graduate pd-1 " +
    (isCollapsed ? " training-collapse " : "");

  const containerTrainingParagraph =
    "ms-2 " + (isCollapsed ? " training-paragraph-collapse " : "");

  const containerAutomation =
    "fa-solid fa-gears pd-1 " + (isCollapsed ? " automation-collapse" : "");

  const containerAutomationParagraph =
    " ms-2 " + (isCollapsed ? " automation-paragraph-collapse " : "");

  const containerPortfolio =
    "fa-solid fa-folder-open pd-1 " +
    (isCollapsed ? " portfolio-collapse" : "");

  const containerPortfolioParagraph =
    "ms-2 " + (isCollapsed ? " portfolio-paragraph-collapse " : "");

  const containerTrading =
    "fa-solid fa-money-bill-trend-up pd-1 " +
    (isCollapsed ? "trading-collapse" : "");

  const containerTradingParagraph =
    "ms-2 " + (isCollapsed ? " trading-paragraph-collapse " : "");

  const handleMouseOver = () => {
    console.log("over");
    setIsCollapsed(false);
  };
  const handleMouseOut = () => {
    console.log("out");
    setIsCollapsed(true);
  };
  return (
    <>
      {/* sidebar */}
      <div
        className="col-md-2 col-xl-1 ind-3 alerts-container position-relative p-0"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={containerClassesSideBar}>
          {/* img  */}
          <div className="text-center">
            {isCollapsed && (
              <img
                className={containerImg}
                src={imageCol}
                width="200"
                height="180"
              />
            )}
            {!isCollapsed && (
              <img
                className={containerImg}
                src={imageExp}
                width="200"
                height="180"
              />
            )}
          </div>
          <ul className="nav nav-pills flex-column text-center mb-auto ">
            {/*  Sidebar Alerts begins  */}
            <li className="mt-4">
              <a href="#" className={containerAnchor}>
                <div className="icon-span-container catch">
                  <i className={containerBell}></i>
                  <span className={containerBellParagraph}>Alerts</span>
                </div>
              </a>
            </li>
            {/* Sidebar training begins */}
            <li className={containerList}>
              <a href="#" className={containerAnchor}>
                <div className="icon-span-container">
                  <i className={containerTraining}></i>
                  <span className={containerTrainingParagraph}>Training</span>
                </div>
              </a>
            </li>
            {/* Sidebar automation begins */}
            <li className={containerList}>
              <a href="#" className={containerAnchor}>
                <div className="icon-span-container-ongoing">
                  <i className={containerAutomation}></i>
                  <span className={containerAutomationParagraph}>
                    Automation
                  </span>
                </div>
              </a>
            </li>
            {/* Sidebar portfolio begins */}
            <li className={containerList}>
              <a href="#" className={containerAnchor}>
                <div className="icon-span-container-ongoing">
                  <i className={containerPortfolio}></i>
                  <span className={containerPortfolioParagraph}>Portfolio</span>
                </div>
              </a>
            </li>
            {/* Sidebar trading begins */}
            <li>
              <a href="#" className={containerAnchor}>
                <div className="icon-span-container-ongoing">
                  <i className={containerTrading}></i>
                  <span className={containerTradingParagraph}>Trading</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={imageCol}
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2 mb-2"
              />
            </a>
            <ul
              className="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser2"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* middle-section */}
      <div className="col-xs-10 col-md-10 col-xl-7 ind-2 mt-2 text-white alerts-container positive-relative">
        {/* navbar */}
        <div className="row pd-0">
          <div className="col-sm-3 col-md-3 col-lg-2 col-xl-3 pad-alerts">
            <div className="d-inline vertical-line"></div>
            <a style={brandName} className="navbar-brand">
              <span>ALERTS</span>
            </a>
          </div>
          <div className="col-sm-8 col-md-8 col-lg-9 col-xl-8">
            <div className="fg--search">
              <input
                type="text"
                className="input bg-input rounded"
                placeholder="search"
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>

          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1">
            <i className="fa-solid bell-icon fa-bell">
              <span className="notification-number">6</span>
            </i>
          </div>
        </div>
        {/* navbar */}
        <div className="accordion-container mb-5 ms-2 mt-2">
          <div className="accordion" id="accordionExample">
            <div
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              className="accordion-item collapsed mb-2 accord-item-bg accord-item-border row acc-h"
            >
              {/* buttons */}
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-tags fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span>AMZN</span>
                </div>
              </div>
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-receipt fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;200
                </div>
              </div>
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-arrow-up-wide-short fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="number-color-green">-0.25 %</span>
                </div>
              </div>
              <div className="col-3 text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-money-bill-wave fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;Low Risk
                </div>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              className="accordion-item collapsed row mb-2 accord-item-bg accord-item-border acc-h"
            >
              {/* buttons */}
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-tags fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span>TSLA</span>
                </div>
              </div>
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-receipt fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;200
                </div>
              </div>
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-arrow-down-wide-short fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="number-color-red">-0.25 %</span>
                </div>
              </div>
              <div className="col-3 text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-money-bills fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;High Risk
                </div>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              className="accordion-item collapsed mb-2 accord-item-bg accord-item-border row acc-h"
            >
              {/* buttons */}
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-tags fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span>ABQQ</span>
                </div>
              </div>
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-receipt fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;200
                </div>
              </div>
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-arrow-down-wide-short fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="number-color-red">-0.25 %</span>
                </div>
              </div>
              <div className="col-3 text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-money-bill-wave fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;Low Risk
                </div>
              </div>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              className="accordion-item collapsed row mb-2 accord-item-bg accord-item-border acc-h"
            >
              {/* buttons */}
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-tags fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span>MSFT</span>
                </div>
              </div>
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-receipt fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;200
                </div>
              </div>
              <div className="col-3 border-alert-right text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-arrow-down-wide-short fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="number-color-red">-0.25 %</span>
                </div>
              </div>
              <div className="col-3 text-center d-flex align-self-center">
                <div className="w-100 text-center">
                  <i className="fa-money-bill-wave fa-solid"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;Low risk
                </div>
              </div>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right-section*/}
      <div className="col-xs-12 col-xl-4 ind-1 filter-bg rounded mt-3 text-white positive-relative">
        {/* filters container */}
        <div className="filters">
          {/* design container */}
          <div className="container">
            {/* heading */}
            <div className="row text-center ">
              <p className="font-twenty-four font-weight-bold ">Filters</p>
            </div>
            {/* two buttons */}
            <div className="d-flex justify-content-between">
              <div className="">
                <button className="btn p-0 text-filter-applied">
                  Filters Applied
                </button>
              </div>
              <div className="">
                <button className="btn p-0 text-white">Clear All</button>
              </div>
            </div>
            {/* chosen category */}
            <div className="container-chosen-category bg-container-chosen rounded d-flex flex-wrap mb-2">
              <div className="ms-2">
                <p className="bg-chosen-item p-chosen-item rounded align-content-center align-self-center d-inline">
                  Real Estate <i className="fa-solid fa-x x-mark-font"></i>
                </p>
              </div>
            </div>
            {/* list container */}
            <div className="bg-stock container rounded pt-2 pb-4">
              {/* stock heading */}
              <h6>Stock</h6>
              {/* search bar */}
              <div className="fg--search">
                <input
                  type="text"
                  className="input rounded bg-ticker"
                  placeholder="$ TICKER"
                />
                <button type="submit">
                  <i className="fa fa-search icon-search-filter"></i>
                </button>
              </div>
              {/* industry */}
              <div className="row mb-2">
                <p>
                  <i className="fa-solid fa-caret-down"></i> Industry
                </p>
              </div>
              {/* industry items */}
              <div className="items-container">
                <div className="row">
                  <div className="d-inline vertical-line-left-filter"></div>
                  <div className="col-5 p-0">
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-regular fa-heart"></i>
                        &nbsp;&nbsp;Health Care
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-solid fa-recycle"></i>{" "}
                        &nbsp;&nbsp;Materials
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-solid fa-bolt"></i> &nbsp;&nbsp;Energy
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-regular fa-credit-card"></i>{" "}
                        &nbsp;&nbsp;Consumer Discretionary
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-solid fa-cart-shopping"></i>{" "}
                        &nbsp;&nbsp;Consumer Staples
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry mb-0 font-twelve">
                        <i className="fa-solid fa-house"></i> &nbsp;&nbsp;Real
                        Estate
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry mb-0 font-twelve">
                        &nbsp;&nbsp;
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve mb-0">
                        &nbsp;&nbsp;
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-fifteen">
                        <i className="fa-solid fa-caret-down"></i>
                        &nbsp;&nbsp;Market Cap
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <input
                          className="form-check-input radio-color"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          &nbsp; Micro
                        </label>
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <input
                          className="form-check-input radio-color"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          &nbsp; Small
                        </label>
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <input
                          className="form-check-input radio-color"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          &nbsp; Large
                        </label>
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        &nbsp;&nbsp;
                      </p>
                    </div>

                    <div className="item font-weight-bold">
                      <p className="bg-p-filter-industry font-weight-bold">
                        &nbsp;&nbsp;Strategy
                      </p>
                    </div>
                    <div className="item rounded">
                      <p className="bg-p-filter-industry filter-strategy-assets-colors rounded mb-0">
                        &nbsp;&nbsp;Big Option Buys
                      </p>
                    </div>
                    <div className="item rounded ">
                      <p className="bg-p-filter-industry filter-strategy-assets-colors rounded mb-0">
                        &nbsp;&nbsp;Merger Arbitrage
                      </p>
                    </div>
                    <div className="item rounded">
                      <p className="bg-p-filter-industry filter-strategy-assets-colors rounded mb-0">
                        &nbsp;&nbsp;Short Reports
                      </p>
                    </div>
                  </div>
                  <div className="d-inline vertical-line-right-filter"></div>
                  <div className="col-5 pl-0">
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-solid fa-computer"></i> &nbsp;&nbsp;IT
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-brands fa-rocketchat"></i>{" "}
                        &nbsp;&nbsp;Communication
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-solid fa-industry"></i>{" "}
                        &nbsp;&nbsp;Industrials
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-solid fa-wrench"></i>{" "}
                        &nbsp;&nbsp;Utilities
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <i className="fa-solid fa-sack-dollar"></i>{" "}
                        &nbsp;&nbsp;Financials
                      </p>
                    </div>

                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        &nbsp;&nbsp;
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry mb-0">&nbsp;&nbsp;</p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-fifteen">
                        <i className="fa-solid fa-caret-down"></i>
                        &nbsp;&nbsp;Risk Level
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <input
                          className="form-check-input radio-color"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          &nbsp; Low Risk
                        </label>
                      </p>
                    </div>

                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <input
                          className="form-check-input radio-color"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label font-twelve"
                          htmlFor="flexRadioDefault1"
                        >
                          &nbsp; High Risk
                        </label>
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry font-twelve">
                        <input
                          className="form-check-input radio-color"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label font-twelve"
                          htmlFor="flexRadioDefault1"
                        >
                          &nbsp; Low Risk
                        </label>
                      </p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry  mb-0">&nbsp;&nbsp;</p>
                    </div>
                    <div className="item">
                      <p className="bg-p-filter-industry margin-above-asset font-weight-bold ">
                        &nbsp;&nbsp;Asset
                      </p>
                    </div>
                    <div className="item rounded ">
                      <p className="bg-p-filter-industry filter-strategy-assets-colors rounded mb-0">
                        &nbsp;&nbsp;Stocks
                      </p>
                    </div>
                    <div className="item rounded">
                      <p className="bg-p-filter-industry filter-strategy-assets-colors rounded mb-0">
                        &nbsp;&nbsp;Options
                      </p>
                    </div>
                    <div className="item rounded">
                      <p className="bg-p-filter-industry filter-strategy-assets-colors rounded mb-0">
                        &nbsp;&nbsp;Futures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* apply button */}
            <div className="text-center">
              <button className="btn mt-4 mb-2 btn-apply">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Alerts;
