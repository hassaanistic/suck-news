import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";


import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>

        <Navbar />
        <LoadingBar
          color="#f11946"
          height={4}
          progress={progress}
        />

        <Routes>
          <Route exact path="/*" element={<Navigate to="/" />} />

          <Route exact path="/" element={<News setProgress={setProgress} cetagory="general" color="info" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" cetagory="business" color="secondary" />}
          />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" cetagory="entertainment" color="warning" />} />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                cetagory="general"
                color="info"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                cetagory="health"
                color="success"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                cetagory="science"
                color="danger"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                cetagory="sports"
                color="success"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                cetagory="technology"
                color="warning"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
