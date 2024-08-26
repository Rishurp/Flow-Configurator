import React, { useCallback, useState, useMemo } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";
// const initialNodes = [
//   { id: "1", position: { x: 30, y: 250 }, data: { label: "cart_router.py" } },
//   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
// ];
const initialEdges = [
  {
    id: "e1-2",
    source: "node-1",
    target: "node-2",
    sourceHandle: "top",
    targetHandle: "left",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7C7C7C",
    },
  },
  {
    id: "e1-3",
    source: "node-1",
    target: "node-3",
    sourceHandle: "bottom",
    targetHandle: "left",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7C7C7C",
    },
  },
  {
    id: "e2-4",
    source: "node-2",
    target: "node-4",
    sourceHandle: "right",
    targetHandle: "left",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7C7C7C",
    },
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7C7C7C",
    },
  },
  {
    id: "e2-5",
    source: "node-2",
    target: "node-5",
    sourceHandle: "right",
    targetHandle: "left",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7C7C7C",
    },
  },
  {
    id: "e2-6",
    source: "node-2",
    target: "node-6",
    sourceHandle: "right",
    targetHandle: "left",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7C7C7C",
    },
  },
  {
    id: "e3-7",
    source: "node-3",
    target: "node-7",
    sourceHandle: "right",
    targetHandle: "left",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7C7C7C",
    },
  },
  {
    id: "e3-8",
    source: "node-3",
    target: "node-8",
    sourceHandle: "right",
    targetHandle: "left",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7C7C7C",
    },
  },
  {
    id: "e3-9",
    source: "node-3",
    target: "node-9",
    sourceHandle: "right",
    targetHandle: "left",
    type: "step",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7C7C7C",
    },
  },
];

const initialNodes = [
  {
    id: "node-1",
    type: "customNode",
    position: { x: 50, y: 300 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "customNode",
    position: { x: 500, y: 150 },
    data: { value: 123 },
  },
  {
    id: "node-3",
    type: "customNode",
    position: { x: 500, y: 450 },
    data: { value: 123 },
  },
  {
    id: "node-4",
    type: "customNode",
    position: { x: 1100, y: -40 },
    data: { value: 123 },
  },
  {
    id: "node-5",
    type: "customNode",
    position: { x: 1100, y: 120 },
    data: { value: 123 },
  },
  {
    id: "node-6",
    type: "customNode",
    position: { x: 1100, y: 300 },
    data: { value: 123 },
  },
  {
    id: "node-7",
    type: "customNode",
    position: { x: 1100, y: 470 },
    data: { value: 123 },
  },
  {
    id: "node-8",
    type: "customNode",
    position: { x: 1100, y: 630 },
    data: { value: 123 },
  },
  {
    id: "node-9",
    type: "customNode",
    position: { x: 1100, y: 800 },
    data: { value: 123 },
  },
];

export default function RightPanel() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  return (
    <ReactFlowProvider>
      <div className="relative z-0 h-[90.6vh]">
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          style={{ width: "100%", height: "100%" }}
        >
          <Background
            color="#222222"
            gap={70}
            lineWidth={2}
            variant="lines" // Adjusting to the correct variant value
          />
        </ReactFlow>
        <div className="absolute bottom-10 left-8 z-1 text-white">
          <button className="px-2 py-2 rounded-md bg-[#F27400] text-[#FFFFFF] drop-shadow-2xl">
            + Add Methods
          </button>
        </div>
      </div>
    </ReactFlowProvider>
  );
}
