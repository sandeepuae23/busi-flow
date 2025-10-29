import { useEffect, useRef, useState } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize2, Minimize2 } from "lucide-react";

const initialDiagram = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" name="Start Payment">
      <bpmn:outgoing>Flow_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Task_Submit" />
    <bpmn:userTask id="Task_Submit" name="Submit Payment">
      <bpmn:incoming>Flow_1</bpmn:incoming>
      <bpmn:outgoing>Flow_2</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_2" sourceRef="Task_Submit" targetRef="Gateway_1" />
    <bpmn:exclusiveGateway id="Gateway_1" name="Valid?">
      <bpmn:incoming>Flow_2</bpmn:incoming>
      <bpmn:outgoing>Flow_3</bpmn:outgoing>
      <bpmn:outgoing>Flow_4</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_3" name="Yes" sourceRef="Gateway_1" targetRef="Task_Approve" />
    <bpmn:sequenceFlow id="Flow_4" name="No" sourceRef="Gateway_1" targetRef="Task_Fix" />
    <bpmn:userTask id="Task_Fix" name="Fix Errors">
      <bpmn:incoming>Flow_4</bpmn:incoming>
      <bpmn:outgoing>Flow_5</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_5" sourceRef="Task_Fix" targetRef="Gateway_1" />
    <bpmn:userTask id="Task_Approve" name="Approve Payment">
      <bpmn:incoming>Flow_3</bpmn:incoming>
      <bpmn:outgoing>Flow_6</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_6" sourceRef="Task_Approve" targetRef="Gateway_2" />
    <bpmn:exclusiveGateway id="Gateway_2" name="Decision">
      <bpmn:incoming>Flow_6</bpmn:incoming>
      <bpmn:outgoing>Flow_7</bpmn:outgoing>
      <bpmn:outgoing>Flow_8</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_7" name="Approve" sourceRef="Gateway_2" targetRef="EndEvent_1" />
    <bpmn:sequenceFlow id="Flow_8" name="Reject" sourceRef="Gateway_2" targetRef="Task_Notify" />
    <bpmn:serviceTask id="Task_Notify" name="Notify Rejection">
      <bpmn:incoming>Flow_8</bpmn:incoming>
      <bpmn:outgoing>Flow_9</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_9" sourceRef="Task_Notify" targetRef="EndEvent_2" />
    <bpmn:endEvent id="EndEvent_1" name="Payment Approved">
      <bpmn:incoming>Flow_7</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:endEvent id="EndEvent_2" name="Payment Rejected">
      <bpmn:incoming>Flow_9</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="134" y="145" width="72" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Submit_di" bpmnElement="Task_Submit">
        <dc:Bounds x="240" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1_di" bpmnElement="Gateway_1" isMarkerVisible="true">
        <dc:Bounds x="395" y="95" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="404" y="75" width="32" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Fix_di" bpmnElement="Task_Fix">
        <dc:Bounds x="370" y="200" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Approve_di" bpmnElement="Task_Approve">
        <dc:Bounds x="500" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_2_di" bpmnElement="Gateway_2" isMarkerVisible="true">
        <dc:Bounds x="655" y="95" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="658" y="75" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_Notify_di" bpmnElement="Task_Notify">
        <dc:Bounds x="630" y="200" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_1_di" bpmnElement="EndEvent_1">
        <dc:Bounds x="762" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="753" y="145" width="54" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_2_di" bpmnElement="EndEvent_2">
        <dc:Bounds x="762" y="222" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="753" y="265" width="54" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1">
        <di:waypoint x="188" y="120" />
        <di:waypoint x="240" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_2_di" bpmnElement="Flow_2">
        <di:waypoint x="340" y="120" />
        <di:waypoint x="395" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_3_di" bpmnElement="Flow_3">
        <di:waypoint x="445" y="120" />
        <di:waypoint x="500" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="463" y="102" width="19" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_4_di" bpmnElement="Flow_4">
        <di:waypoint x="420" y="145" />
        <di:waypoint x="420" y="200" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="428" y="170" width="15" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_5_di" bpmnElement="Flow_5">
        <di:waypoint x="370" y="240" />
        <di:waypoint x="420" y="240" />
        <di:waypoint x="420" y="145" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_6_di" bpmnElement="Flow_6">
        <di:waypoint x="600" y="120" />
        <di:waypoint x="655" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_7_di" bpmnElement="Flow_7">
        <di:waypoint x="705" y="120" />
        <di:waypoint x="762" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="715" y="102" width="42" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_8_di" bpmnElement="Flow_8">
        <di:waypoint x="680" y="145" />
        <di:waypoint x="680" y="200" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="688" y="170" width="34" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_9_di" bpmnElement="Flow_9">
        <di:waypoint x="730" y="240" />
        <di:waypoint x="762" y="240" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

interface BpmnCanvasProps {
  onElementSelect: (element: any) => void;
}

export const BpmnCanvas = ({ onElementSelect }: BpmnCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modeler, setModeler] = useState<BpmnModeler | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;

    const modelerInstance = new BpmnModeler({
      container: containerRef.current,
      keyboard: {
        bindTo: window,
      },
    });

    modelerInstance
      .importXML(initialDiagram)
      .then(() => {
        const canvas = modelerInstance.get("canvas") as any;
        canvas.zoom("fit-viewport");
        
        // Add selection listener
        const eventBus = modelerInstance.get("eventBus") as any;
        eventBus.on("selection.changed", (event: any) => {
          const { newSelection } = event;
          if (newSelection && newSelection.length > 0) {
            onElementSelect(newSelection[0]);
          } else {
            onElementSelect(null);
          }
        });
      })
      .catch((err: any) => {
        console.error("Error rendering BPMN diagram", err);
      });

    setModeler(modelerInstance);

    return () => {
      modelerInstance.destroy();
    };
  }, [onElementSelect]);

  const handleZoomIn = () => {
    if (modeler) {
      const canvas = modeler.get("canvas") as any;
      const newZoom = Math.min(zoom + 0.1, 4);
      canvas.zoom(newZoom);
      setZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (modeler) {
      const canvas = modeler.get("canvas") as any;
      const newZoom = Math.max(zoom - 0.1, 0.1);
      canvas.zoom(newZoom);
      setZoom(newZoom);
    }
  };

  const handleFitViewport = () => {
    if (modeler) {
      const canvas = modeler.get("canvas") as any;
      canvas.zoom("fit-viewport");
      setZoom(1);
    }
  };

  return (
    <div className="relative flex-1 bg-canvas">
      <div ref={containerRef} className="h-full w-full" />
      
      {/* Canvas Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2 bg-card border border-border rounded-lg shadow-lg p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleZoomIn}
          className="h-8 w-8 p-0"
          title="Zoom In"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleZoomOut}
          className="h-8 w-8 p-0"
          title="Zoom Out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleFitViewport}
          className="h-8 w-8 p-0"
          title="Fit to Screen"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
        <div className="text-xs text-center text-muted-foreground px-1 py-0.5">
          {Math.round(zoom * 100)}%
        </div>
      </div>

      {/* Minimap */}
      <div className="absolute bottom-6 left-6 w-48 h-32 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-full bg-canvas/50 flex items-center justify-center">
          <span className="text-xs text-muted-foreground">Minimap</span>
        </div>
      </div>
    </div>
  );
};
