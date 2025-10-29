import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Info, Plus, Edit, Trash2 } from "lucide-react";

interface PropertiesPanelProps {
  selectedElement: any;
}

export const PropertiesPanel = ({ selectedElement }: PropertiesPanelProps) => {
  if (!selectedElement) {
    return (
      <div className="w-80 bg-panel border-l border-panel-border flex items-center justify-center">
        <p className="text-sm text-muted-foreground text-center px-4">
          Select an element on the canvas to view its properties
        </p>
      </div>
    );
  }

  return (
    <div className="w-80 bg-panel border-l border-panel-border flex flex-col">
      <div className="p-4 border-b border-panel-border">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-foreground">PROPERTIES</h3>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
            <Info className="h-3 w-3" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {selectedElement.type || "User Task"}
          </Badge>
          <span className="text-xs text-muted-foreground truncate">
            {selectedElement.businessObject?.name || "Approve Payment"}
          </span>
        </div>
      </div>

      <Tabs defaultValue="general" className="flex-1 flex flex-col">
        <TabsList className="w-full justify-start rounded-none border-b border-panel-border bg-transparent p-0 h-10">
          <TabsTrigger
            value="general"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="forms"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs"
          >
            Forms
          </TabsTrigger>
          <TabsTrigger
            value="listeners"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs"
          >
            Listeners
          </TabsTrigger>
          <TabsTrigger
            value="io"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs"
          >
            I/O
          </TabsTrigger>
          <TabsTrigger
            value="extensions"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs"
          >
            Extensions
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="flex-1">
          <TabsContent value="general" className="p-4 space-y-4 m-0">
            <div className="space-y-2">
              <Label htmlFor="task-id" className="text-xs font-medium">
                Task ID <span className="text-destructive">*</span>
              </Label>
              <Input
                id="task-id"
                defaultValue="approve-payment-task"
                className="h-8 text-xs"
              />
              <div className="flex items-start gap-1 text-xs text-muted-foreground">
                <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span>Unique identifier (no spaces)</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="task-name" className="text-xs font-medium">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="task-name"
                defaultValue="Approve Payment"
                className="h-8 text-xs"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="documentation" className="text-xs font-medium">
                Documentation
              </Label>
              <Textarea
                id="documentation"
                placeholder="Describe this element..."
                className="text-xs resize-none"
                rows={3}
                defaultValue="Manager approves payment if amount > $100K"
              />
            </div>

            <div className="pt-2 border-t border-border">
              <h4 className="text-xs font-semibold mb-3">Task Configuration</h4>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-xs font-medium">Assignee Type</Label>
                  <RadioGroup defaultValue="expression" className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="static" id="static" className="h-3 w-3" />
                      <Label htmlFor="static" className="text-xs font-normal">
                        Static User
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="expression" id="expression" className="h-3 w-3" />
                      <Label htmlFor="expression" className="text-xs font-normal">
                        Expression
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="groups" id="groups" className="h-3 w-3" />
                      <Label htmlFor="groups" className="text-xs font-normal">
                        Candidate Groups
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assignee-expr" className="text-xs font-medium">
                    Assignee Expression
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="assignee-expr"
                      defaultValue="${approverService.getApprover(amount)}"
                      className="h-8 text-xs flex-1"
                    />
                    <Button variant="outline" size="sm" className="h-8 text-xs">
                      Test
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority" className="text-xs font-medium">
                    Priority
                  </Label>
                  <Input
                    id="priority"
                    type="number"
                    defaultValue="50"
                    className="h-8 text-xs"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="use-expr" className="h-3 w-3" />
                    <Label htmlFor="use-expr" className="text-xs font-normal">
                      Use Expression
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-border">
              <h4 className="text-xs font-semibold mb-3">Task Type</h4>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-xs font-medium">Implementation</Label>
                  <RadioGroup defaultValue="external" className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="external" id="external" className="h-3 w-3 mt-1" />
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="external" className="text-xs font-normal">
                          External Task
                        </Label>
                        <Input
                          placeholder="Topic"
                          defaultValue="payment-approval"
                          className="h-7 text-xs"
                        />
                        <div className="flex items-center space-x-2">
                          <Checkbox id="retry" className="h-3 w-3" defaultChecked />
                          <Label htmlFor="retry" className="text-xs font-normal">
                            Retry: <Input type="number" defaultValue="3" className="h-6 w-12 text-xs inline-flex ml-1" /> attempts
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="async" className="h-3 w-3" defaultChecked />
                          <Label htmlFor="async" className="text-xs font-normal">
                            Run asynchronously
                          </Label>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="forms" className="p-4 space-y-4 m-0">
            <div className="space-y-2">
              <Label className="text-xs font-medium">Form Type</Label>
              <Select defaultValue="camunda">
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="camunda">Camunda Forms</SelectItem>
                  <SelectItem value="embedded">Embedded Forms (HTML)</SelectItem>
                  <SelectItem value="generated">Generated Forms</SelectItem>
                  <SelectItem value="external">External Forms</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-medium">Form Definition</Label>
              <div className="flex gap-2">
                <Select defaultValue="payment-approval">
                  <SelectTrigger className="h-8 text-xs flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="payment-approval">payment-approval-form</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" className="h-8 text-xs">
                  Edit
                </Button>
              </div>
            </div>

            <div className="pt-2 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold">Form Variables Mapping</h4>
                <Button variant="ghost" size="sm" className="h-6 text-xs">
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>

              <div className="space-y-2">
                {[
                  { field: "amount", variable: "paymentAmount", type: "Long" },
                  { field: "creditorName", variable: "creditor", type: "String" },
                  { field: "approved", variable: "isApproved", type: "Boolean" },
                ].map((mapping) => (
                  <div
                    key={mapping.field}
                    className="flex items-center gap-2 p-2 bg-muted/50 rounded text-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{mapping.field}</div>
                      <div className="text-muted-foreground text-[10px]">
                        → {mapping.variable} ({mapping.type})
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="listeners" className="p-4 space-y-4 m-0">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold">Task Listeners</h4>
                <Button variant="ghost" size="sm" className="h-6 text-xs">
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>

              <div className="space-y-2">
                {[
                  { event: "create", listener: "NotifyAssigneeListener" },
                  { event: "complete", listener: "UpdateMetricsListener" },
                ].map((item, index) => (
                  <div key={index} className="p-2 bg-muted/50 rounded">
                    <div className="flex items-start justify-between mb-1">
                      <div className="text-xs font-medium">{item.event}</div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-[10px] text-muted-foreground">{item.listener}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="io" className="p-4 space-y-4 m-0">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold">Input Parameters</h4>
                <Button variant="ghost" size="sm" className="h-6 text-xs">
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>

              <div className="space-y-2">
                {[
                  { source: "paymentData", target: "payment", type: "Object" },
                  { source: "debtorAccount", target: "sourceAccount", type: "String" },
                ].map((param, index) => (
                  <div key={index} className="p-2 bg-muted/50 rounded text-xs">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{param.source} → {param.target}</div>
                        <div className="text-[10px] text-muted-foreground">{param.type}</div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-border">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold">Output Parameters</h4>
                <Button variant="ghost" size="sm" className="h-6 text-xs">
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>

              <div className="space-y-2">
                {[
                  { source: "paymentId", target: "submittedPaymentId", type: "String" },
                  { source: "status", target: "paymentStatus", type: "String" },
                ].map((param, index) => (
                  <div key={index} className="p-2 bg-muted/50 rounded text-xs">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{param.source} → {param.target}</div>
                        <div className="text-[10px] text-muted-foreground">{param.type}</div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="extensions" className="p-4 space-y-4 m-0">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold">Camunda Extensions</h4>
                <Button variant="ghost" size="sm" className="h-6 text-xs">
                  <Plus className="h-3 w-3 mr-1" />
                  Add Property
                </Button>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-medium">Properties</Label>
                {[
                  { key: "slaMinutes", value: "120" },
                  { key: "notifyEmail", value: "${assignee.email}" },
                ].map((prop, index) => (
                  <div key={index} className="p-2 bg-muted/50 rounded text-xs">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium font-mono">{prop.key}</div>
                        <div className="text-[10px] text-muted-foreground font-mono">{prop.value}</div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};
