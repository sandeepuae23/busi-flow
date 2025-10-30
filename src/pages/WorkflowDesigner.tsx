import { useState } from "react";
import type BpmnModeler from "bpmn-js/lib/Modeler";
import { WorkflowToolbar } from "@/components/workflow/WorkflowToolbar";
import { BpmnPalette } from "@/components/workflow/BpmnPalette";
import { BpmnCanvas } from "@/components/workflow/BpmnCanvas";
import { PropertiesPanel } from "@/components/workflow/PropertiesPanel";
import { BottomPanel } from "@/components/workflow/BottomPanel";

const WorkflowDesigner = () => {
  const [selectedElement, setSelectedElement] = useState<any>(null);
  const [workflowName, setWorkflowName] = useState("Payment Approval Workflow v2.3");
  const [workflowStatus, setWorkflowStatus] = useState<"deployed" | "draft">("deployed");
  const [modeler, setModeler] = useState<BpmnModeler | null>(null);

  return (
    <div className="flex flex-col h-screen w-full bg-background">
      {/* Top Toolbar */}
      <WorkflowToolbar 
        workflowName={workflowName}
        workflowStatus={workflowStatus}
        modeler={modeler}
        onSave={() => console.log("Save")}
        onTest={() => console.log("Test")}
        onDeploy={() => console.log("Deploy")}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Palette */}
        <BpmnPalette />

        {/* Center Canvas */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <BpmnCanvas onElementSelect={setSelectedElement} onModelerReady={setModeler} />
        </div>

        {/* Right Properties Panel */}
        <PropertiesPanel selectedElement={selectedElement} />
      </div>

      {/* Bottom Panel */}
      <BottomPanel />
    </div>
  );
};

export default WorkflowDesigner;
