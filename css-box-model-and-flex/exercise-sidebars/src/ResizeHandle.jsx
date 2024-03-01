import { PanelResizeHandle } from "react-resizable-panels";

// eslint-disable-next-line react/prop-types
export default function ResizeHandle({ className = "", id, horizontal = false }) {
  return (
    <PanelResizeHandle
      className={['resizeHandleOuter', className].join(" ")}
      id={id}
    >
      <div className="resizeHandleInner">
        <svg className="icon" style={{transform:`rotate(${horizontal ? 90:0}deg)`}} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"
          />
        </svg>
      </div>
    </PanelResizeHandle>
  );
}
