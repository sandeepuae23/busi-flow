import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Save,
  Play,
  Rocket,
  Undo,
  Redo,
  Download,
  Upload,
  FileText,
  Copy,
  CheckCircle2,
  ChevronDown,
  ZoomIn,
  ZoomOut,
  Maximize,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WorkflowToolbarProps {
  workflowName: string;
  workflowStatus: "deployed" | "draft";
  onSave: () => void;
  onTest: () => void;
  onDeploy: () => void;
}

export const WorkflowToolbar = ({
  workflowName,
  workflowStatus,
  onSave,
  onTest,
  onDeploy,
}: WorkflowToolbarProps) => {
  return (
    <div className="bg-toolbar border-b border-border">
      {/* Menu Bar */}
      <div className="flex items-center px-4 py-2 border-b border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8">
              File <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>New Workflow</DropdownMenuItem>
            <DropdownMenuItem>Open Workflow...</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Save</DropdownMenuItem>
            <DropdownMenuItem>Save As...</DropdownMenuItem>
            <DropdownMenuItem>Save As Version...</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Import BPMN...</DropdownMenuItem>
            <DropdownMenuItem>Export BPMN...</DropdownMenuItem>
            <DropdownMenuItem>Export as Image</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8">
              Edit <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Undo <span className="ml-auto text-xs text-muted-foreground">Ctrl+Z</span></DropdownMenuItem>
            <DropdownMenuItem>Redo <span className="ml-auto text-xs text-muted-foreground">Ctrl+Y</span></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cut <span className="ml-auto text-xs text-muted-foreground">Ctrl+X</span></DropdownMenuItem>
            <DropdownMenuItem>Copy <span className="ml-auto text-xs text-muted-foreground">Ctrl+C</span></DropdownMenuItem>
            <DropdownMenuItem>Paste <span className="ml-auto text-xs text-muted-foreground">Ctrl+V</span></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8">
              View <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>✓ Palette</DropdownMenuItem>
            <DropdownMenuItem>✓ Properties Panel</DropdownMenuItem>
            <DropdownMenuItem>✓ Bottom Panel</DropdownMenuItem>
            <DropdownMenuItem>✓ Minimap</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Zoom In <span className="ml-auto text-xs text-muted-foreground">Ctrl++</span></DropdownMenuItem>
            <DropdownMenuItem>Zoom Out <span className="ml-auto text-xs text-muted-foreground">Ctrl+-</span></DropdownMenuItem>
            <DropdownMenuItem>Zoom to Fit <span className="ml-auto text-xs text-muted-foreground">Ctrl+0</span></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8">
              Deploy <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Validate Workflow</DropdownMenuItem>
            <DropdownMenuItem>Test Run (Sandbox)</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Deploy to Development</DropdownMenuItem>
            <DropdownMenuItem>Deploy to UAT</DropdownMenuItem>
            <DropdownMenuItem>Deploy to Production</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Deployment History</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="ml-4 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">|</span>
          <Button variant="ghost" size="sm" className="h-8 text-xs">
            Help
          </Button>
        </div>
      </div>

      {/* Workflow Info and Actions */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-base font-semibold text-foreground">{workflowName}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant={workflowStatus === "deployed" ? "default" : "secondary"} className="text-xs">
                {workflowStatus === "deployed" ? (
                  <><CheckCircle2 className="h-3 w-3 mr-1" /> Deployed</>
                ) : (
                  "Draft"
                )}
              </Badge>
              <span className="text-xs text-muted-foreground">Last Modified: 2 hours ago</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Actions */}
          <Button variant="ghost" size="sm" onClick={onSave}>
            <Undo className="h-4 w-4 mr-2" />
            Undo
          </Button>
          <Button variant="ghost" size="sm">
            <Redo className="h-4 w-4 mr-2" />
            Redo
          </Button>
          <div className="h-6 w-px bg-border mx-2" />
          <Button variant="outline" size="sm" onClick={onSave}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Export
          </Button>
          <div className="h-6 w-px bg-border mx-2" />
          <Button variant="outline" size="sm" onClick={onTest}>
            <Play className="h-4 w-4 mr-2" />
            Test Run
          </Button>
          <Button variant="outline" size="sm">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Validate
          </Button>
          <Button variant="outline" size="sm">
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button onClick={onDeploy} size="sm" className="bg-primary hover:bg-primary-hover">
            <Rocket className="h-4 w-4 mr-2" />
            Deploy to Prod
          </Button>
        </div>
      </div>

      {/* View Controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-t border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">View:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                <ZoomIn className="h-3 w-3 mr-1" />
                Zoom: 100% <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>50%</DropdownMenuItem>
              <DropdownMenuItem>75%</DropdownMenuItem>
              <DropdownMenuItem>100%</DropdownMenuItem>
              <DropdownMenuItem>125%</DropdownMenuItem>
              <DropdownMenuItem>150%</DropdownMenuItem>
              <DropdownMenuItem>200%</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="sm" className="h-7 text-xs">
            <Maximize className="h-3 w-3 mr-1" />
            Fit to Screen
          </Button>
          <Button variant="ghost" size="sm" className="h-7 text-xs">
            <Maximize className="h-3 w-3 mr-1" />
            Full Screen
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Elements: 12 | Connections: 8</span>
        </div>
      </div>
    </div>
  );
};
