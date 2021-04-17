/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";

// core components
import {
  chartOptions,
  parseOptions,
} from "views/examples/variables/charts.js";

import JobItem from "components/Student/JobItem";

const JobsList = (props) => {

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <>
    <div className="bg-gradient-default pt-6">
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
    </div>
    </>
  );
};

export default JobsList;
