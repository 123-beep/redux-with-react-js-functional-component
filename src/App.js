import React from "react";
import "./styles.css";
import { connect } from "react-redux";
function App(props) {
  console.log(props);
  return (
    <>
      <div className="App">
        <h1>
          Hello CodeSandbox {props.myname}
          {props.year}
        </h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={() => props.changename("vikas")}>Changename</button>
        <button onClick={() => props.changeyear("2020")}>changeyear</button>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    myname: state.reducer.name,
    year: state.year.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changename: name =>
      dispatch({
        type: "CHANGE_NAME",
        payload: name
      }),
    changeyear: name =>
      dispatch({
        type: "CHANGE_YEAR",
        payload: name
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
