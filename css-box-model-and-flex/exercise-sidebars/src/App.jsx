import { useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

import "./App.css";
import ResizeHandle from "./ResizeHandle";
import ChartContainer from "./ChartContainer";

function App() {
  const [layout, setLayout] = useState("vertical");

  const toggleLayout = () => {
    setLayout(layout === "vertical" ? "horizontal" : "vertical");
  };
  return (
    <>
      <button onClick={toggleLayout}>Toggle layout</button>
      <div className="app-container">
        <PanelGroup direction="vertical">
          <Panel maxSize={75}>
            <PanelGroup direction="horizontal">
              <Panel className="panelContent" defaultSize={30} minSize={20}>
                left
              </Panel>
              <ResizeHandle horizontal />
              <Panel className="panelContent" minSize={30}>
                <ChartContainer />
              </Panel>
              {layout === "horizontal" && (
                <>
                  <ResizeHandle horizontal />
                  <Panel className="panelContent" defaultSize={30} minSize={20}>
                    right
                  </Panel>
                </>
              )}
            </PanelGroup>
          </Panel>
          {layout === "vertical" && (
            <>
              {" "}
              <ResizeHandle />
              <Panel className="panelContent" maxSize={75}>
                bottom
              </Panel>
            </>
          )}
        </PanelGroup>
      </div>
    </>
  );
}

export default App;
