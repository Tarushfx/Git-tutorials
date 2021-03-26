import * as React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        {/* partial:index.partial.html */}
        <div className="text">
          <p>404</p>
        </div>
        <div className="container">
          {/* caveman left */}
          <div className="caveman">
            <div className="leg">
              <div className="foot">
                <div className="fingers" />
              </div>
            </div>
            <div className="leg">
              <div className="foot">
                <div className="fingers" />
              </div>
            </div>
            <div className="shape">
              <div className="circle" />
              <div className="circle" />
            </div>
            <div className="head">
              <div className="eye">
                <div className="nose" />
              </div>
              <div className="mouth" />
            </div>
            <div className="arm-right">
              <div className="club" />
            </div>
          </div>
          {/* caveman right */}
          <div className="caveman">
            <div className="leg">
              <div className="foot">
                <div className="fingers" />
              </div>
            </div>
            <div className="leg">
              <div className="foot">
                <div className="fingers" />
              </div>
            </div>
            <div className="shape">
              <div className="circle" />
              <div className="circle" />
            </div>
            <div className="head">
              <div className="eye">
                <div className="nose" />
              </div>
              <div className="mouth" />
            </div>
            <div className="arm-right">
              <div className="club" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
