import React from "react";
import redirect from "../assets/redirect.svg";
import { Handle, Position } from "@xyflow/react";

export default function CustomNode() {
  return (
    <>
      <div className="bg-[#181E25] w-[100%] border border-[#FFAD62] text-white px-4 py-2">
        <div className="flex justify-between border-b-2 border-b-[#FFAD62] items-center">
          <div>cart_router</div>
          <div>
            <img src={redirect} alt="redirect" />
          </div>
        </div>
        <div>
          <p> add_item_to_cart</p>
          <ul>
            <li>
              <span>DependentLibs</span> : [sqlalchemy]
            </li>
            <li>
              <span>Params</span> : [user_id, item, db]
            </li>
            <li>
              <span>DependentLibs</span> : JSONResponse
            </li>
          </ul>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        style={{ visibility: "hidden" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={{ visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={{ visibility: "hidden" }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left"
        style={{ visibility: "hidden" }}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        style={{ visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom"
        style={{ visibility: "hidden" }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        style={{ visibility: "hidden" }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        style={{ visibility: "hidden" }}
      />
    </>
  );
}
