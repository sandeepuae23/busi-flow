import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Circle,
  Square,
  Diamond,
  Mail,
  Clock,
  Radio,
  AlertCircle,
  Settings,
  Send,
  Inbox,
  FileText,
  Briefcase,
  Phone,
  GitBranch,
  Zap,
  X,
  Box,
  Repeat,
  Database,
  File,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PaletteSection {
  title: string;
  icon: React.ReactNode;
  items: Array<{ icon: React.ReactNode; label: string; type: string }>;
}

export const BpmnPalette = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["Start Events", "Tasks", "Gateways", "End Events"])
  );

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  const sections: PaletteSection[] = [
    {
      title: "Start Events",
      icon: <Circle className="h-4 w-4" />,
      items: [
        { icon: <Circle className="h-5 w-5" />, label: "Start", type: "start" },
        { icon: <Mail className="h-5 w-5" />, label: "Message", type: "message-start" },
        { icon: <Clock className="h-5 w-5" />, label: "Timer", type: "timer-start" },
        { icon: <Radio className="h-5 w-5" />, label: "Signal", type: "signal-start" },
        { icon: <AlertCircle className="h-5 w-5" />, label: "Conditional", type: "conditional-start" },
      ],
    },
    {
      title: "Tasks",
      icon: <Square className="h-4 w-4" />,
      items: [
        { icon: <Square className="h-5 w-5" />, label: "User Task", type: "user-task" },
        { icon: <Settings className="h-5 w-5" />, label: "Service Task", type: "service-task" },
        { icon: <Send className="h-5 w-5" />, label: "Send Task", type: "send-task" },
        { icon: <Inbox className="h-5 w-5" />, label: "Receive Task", type: "receive-task" },
        { icon: <FileText className="h-5 w-5" />, label: "Script Task", type: "script-task" },
        { icon: <Briefcase className="h-5 w-5" />, label: "Business Task", type: "business-task" },
        { icon: <Phone className="h-5 w-5" />, label: "Manual Task", type: "manual-task" },
      ],
    },
    {
      title: "Gateways",
      icon: <Diamond className="h-4 w-4" />,
      items: [
        { icon: <Diamond className="h-5 w-5" />, label: "Exclusive", type: "exclusive-gateway" },
        { icon: <GitBranch className="h-5 w-5" />, label: "Parallel", type: "parallel-gateway" },
        { icon: <Diamond className="h-5 w-5" />, label: "Inclusive", type: "inclusive-gateway" },
        { icon: <Diamond className="h-5 w-5" />, label: "Event-based", type: "event-gateway" },
      ],
    },
    {
      title: "End Events",
      icon: <Circle className="h-4 w-4" />,
      items: [
        { icon: <Circle className="h-5 w-5" />, label: "End", type: "end" },
        { icon: <Mail className="h-5 w-5" />, label: "Message", type: "message-end" },
        { icon: <X className="h-5 w-5" />, label: "Error", type: "error-end" },
        { icon: <Zap className="h-5 w-5" />, label: "Terminate", type: "terminate-end" },
      ],
    },
    {
      title: "Subprocesses",
      icon: <Box className="h-4 w-4" />,
      items: [
        { icon: <Box className="h-5 w-5" />, label: "Subprocess", type: "subprocess" },
        { icon: <Repeat className="h-5 w-5" />, label: "Call Activity", type: "call-activity" },
        { icon: <FileText className="h-5 w-5" />, label: "Event Sub", type: "event-subprocess" },
      ],
    },
    {
      title: "Artifacts",
      icon: <File className="h-4 w-4" />,
      items: [
        { icon: <FileText className="h-5 w-5" />, label: "Text Annotation", type: "text-annotation" },
        { icon: <File className="h-5 w-5" />, label: "Data Object", type: "data-object" },
        { icon: <Database className="h-5 w-5" />, label: "Data Store", type: "data-store" },
      ],
    },
  ];

  return (
    <div className="w-20 bg-panel border-r border-panel-border flex flex-col">
      <div className="p-3 border-b border-panel-border">
        <h3 className="text-xs font-semibold text-foreground">BPMN Elements</h3>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {sections.map((section) => (
            <div key={section.title} className="mb-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleSection(section.title)}
                className="w-full justify-between h-7 px-2 text-xs font-medium hover:bg-secondary/50"
              >
                <div className="flex items-center gap-1.5">
                  {section.icon}
                  <span className="truncate">{section.title.split(" ")[0]}</span>
                </div>
                {expandedSections.has(section.title) ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </Button>

              {expandedSections.has(section.title) && (
                <div className="mt-1 space-y-0.5 pl-1">
                  {section.items.map((item) => (
                    <button
                      key={item.type}
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData("bpmn-type", item.type);
                      }}
                      className={cn(
                        "w-full flex flex-col items-center justify-center p-2 rounded transition-colors",
                        "hover:bg-secondary/50 cursor-grab active:cursor-grabbing",
                        "text-foreground/80 hover:text-foreground"
                      )}
                      title={item.label}
                    >
                      <div className="text-primary">{item.icon}</div>
                      <span className="text-[10px] mt-0.5 text-center leading-tight">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-2 border-t border-panel-border">
        <Button variant="ghost" size="sm" className="w-full text-xs h-7">
          Collapse
        </Button>
      </div>
    </div>
  );
};
