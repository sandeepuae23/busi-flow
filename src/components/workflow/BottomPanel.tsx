import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Edit,
  Trash2,
  Download,
  Upload,
  Play,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const BottomPanel = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!isExpanded) {
    return (
      <div className="h-10 bg-panel border-t border-panel-border flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(true)}
            className="h-7 text-xs"
          >
            <ChevronUp className="h-3 w-3 mr-1" />
            Expand Panel
          </Button>
          <span className="text-xs text-muted-foreground">
            Variables • Scripts • Listeners • Extensions • History
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-72 bg-panel border-t border-panel-border flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b border-panel-border">
        <h3 className="text-xs font-semibold">WORKFLOW DATA</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(false)}
          className="h-6 text-xs"
        >
          <ChevronDown className="h-3 w-3" />
        </Button>
      </div>

      <Tabs defaultValue="variables" className="flex-1 flex flex-col">
        <TabsList className="w-full justify-start rounded-none border-b border-panel-border bg-transparent p-0 h-9 px-4">
          <TabsTrigger
            value="variables"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs h-9"
          >
            Variables
          </TabsTrigger>
          <TabsTrigger
            value="scripts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs h-9"
          >
            Scripts
          </TabsTrigger>
          <TabsTrigger
            value="listeners"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs h-9"
          >
            Listeners
          </TabsTrigger>
          <TabsTrigger
            value="extensions"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs h-9"
          >
            Extensions
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs h-9"
          >
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="variables" className="flex-1 m-0 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search variables..."
                className="h-7 text-xs w-64"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-7 text-xs">
                <Download className="h-3 w-3 mr-1" />
                Import
              </Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">
                <Upload className="h-3 w-3 mr-1" />
                Export
              </Button>
              <Button size="sm" className="h-7 text-xs">
                <Plus className="h-3 w-3 mr-1" />
                Add Variable
              </Button>
            </div>
          </div>

          <ScrollArea className="h-[140px]">
            <table className="w-full text-xs">
              <thead className="bg-muted/50 sticky top-0">
                <tr className="border-b border-border">
                  <th className="text-left p-2 font-medium">Variable Name</th>
                  <th className="text-left p-2 font-medium">Type</th>
                  <th className="text-left p-2 font-medium">Default Value</th>
                  <th className="text-left p-2 font-medium">Scope</th>
                  <th className="text-right p-2 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "paymentAmount", type: "Long", default: "0", scope: "Global" },
                  { name: "currency", type: "String", default: '"USD"', scope: "Global" },
                  { name: "debtorAccount", type: "String", default: "null", scope: "Global" },
                  { name: "creditorAccount", type: "String", default: "null", scope: "Global" },
                  { name: "paymentRail", type: "String", default: '"ACH"', scope: "Global" },
                  { name: "isApproved", type: "Boolean", default: "false", scope: "Task" },
                  { name: "approverComments", type: "String", default: "null", scope: "Task" },
                  { name: "paymentStatus", type: "String", default: '"PENDING"', scope: "Global" },
                ].map((variable, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30">
                    <td className="p-2 font-mono">{variable.name}</td>
                    <td className="p-2">
                      <Badge variant="outline" className="text-[10px]">
                        {variable.type}
                      </Badge>
                    </td>
                    <td className="p-2 font-mono text-muted-foreground">{variable.default}</td>
                    <td className="p-2">
                      <Badge variant={variable.scope === "Global" ? "default" : "secondary"} className="text-[10px]">
                        {variable.scope}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="scripts" className="flex-1 m-0 p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-semibold">Available Scripts</h4>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-7 text-xs">
                <Play className="h-3 w-3 mr-1" />
                Test Scripts
              </Button>
              <Button size="sm" className="h-7 text-xs">
                <Plus className="h-3 w-3 mr-1" />
                Add Script
              </Button>
            </div>
          </div>

          <ScrollArea className="h-[140px]">
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="text-xs font-semibold">Calculate Fees</h5>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-[10px]">Groovy</Badge>
                      <span className="text-[10px] text-muted-foreground">
                        Used in: calculateFeesTask
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Test
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Delete
                    </Button>
                  </div>
                </div>
                <pre className="text-[10px] font-mono bg-background p-2 rounded border border-border overflow-x-auto">
{`def calculateFees(amount, rail) {
  def baseFee = 25.0
  def percentFee = amount * 0.001
  return baseFee + percentFee
}`}
                </pre>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="text-xs font-semibold">Determine Approver</h5>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-[10px]">JavaScript</Badge>
                      <span className="text-[10px] text-muted-foreground">
                        Used in: Gateway conditions
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Test
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Delete
                    </Button>
                  </div>
                </div>
                <pre className="text-[10px] font-mono bg-background p-2 rounded border border-border overflow-x-auto">
{`if (paymentAmount > 100000) {
  execution.setVariable("approver", "senior-manager")
} else {
  execution.setVariable("approver", "auto-approve")
}`}
                </pre>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="listeners" className="flex-1 m-0 p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-semibold">Event Listeners</h4>
            <div className="flex items-center gap-2">
              <Button size="sm" className="h-7 text-xs">
                <Plus className="h-3 w-3 mr-1" />
                Add Listener
              </Button>
            </div>
          </div>

          <ScrollArea className="h-[140px]">
            <div className="space-y-3">
              <div>
                <h5 className="text-xs font-semibold mb-2">Execution Listeners (Process-level)</h5>
                <div className="space-y-2">
                  {[
                    { name: "Log Process Start", event: "start", type: "Java Class" },
                    { name: "Notify Process End", event: "end", type: "Expression" },
                  ].map((listener, index) => (
                    <div key={index} className="p-2 bg-muted/50 rounded border border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-xs font-medium">{listener.name}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-[10px]">{listener.event}</Badge>
                            <Badge variant="secondary" className="text-[10px]">{listener.type}</Badge>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="extensions" className="flex-1 m-0 p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-semibold">Extension Properties</h4>
            <Button size="sm" className="h-7 text-xs">
              <Plus className="h-3 w-3 mr-1" />
              Add Property
            </Button>
          </div>

          <ScrollArea className="h-[140px]">
            <table className="w-full text-xs">
              <thead className="bg-muted/50 sticky top-0">
                <tr className="border-b border-border">
                  <th className="text-left p-2 font-medium">Key</th>
                  <th className="text-left p-2 font-medium">Value</th>
                  <th className="text-left p-2 font-medium">Type</th>
                  <th className="text-right p-2 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { key: "slaMinutes", value: "120", type: "Integer" },
                  { key: "retryAttempts", value: "3", type: "Integer" },
                  { key: "notifyEmail", value: "${assignee.email}", type: "Expression" },
                  { key: "businessKey", value: "PMT-${paymentId}", type: "Expression" },
                ].map((prop, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30">
                    <td className="p-2 font-mono">{prop.key}</td>
                    <td className="p-2 font-mono text-muted-foreground">{prop.value}</td>
                    <td className="p-2">
                      <Badge variant="outline" className="text-[10px]">{prop.type}</Badge>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="history" className="flex-1 m-0 p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-semibold">Version History</h4>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-7 text-xs">
                Compare Versions
              </Button>
              <Button size="sm" className="h-7 text-xs">
                Create New Version
              </Button>
            </div>
          </div>

          <ScrollArea className="h-[140px]">
            <div className="space-y-2">
              {[
                { version: "v2.3", date: "2025-01-15 10:30 AM", author: "S. Johnson", changes: "Fixed bug in gateway condition", status: "Production" },
                { version: "v2.2", date: "2025-01-10 3:45 PM", author: "M. Chen", changes: "Added approval timeout", status: "UAT" },
                { version: "v2.1", date: "2025-01-05 2:15 PM", author: "S. Johnson", changes: "Optimized parallel gateway", status: "Archived" },
              ].map((version, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold">{version.version}</span>
                      {index === 0 && <Badge variant="default" className="text-[10px]">Current</Badge>}
                      <Badge
                        variant={version.status === "Production" ? "default" : version.status === "UAT" ? "secondary" : "outline"}
                        className="text-[10px]"
                      >
                        {version.status}
                      </Badge>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-6 text-xs">
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 text-xs">
                        Deploy
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 text-xs">
                        Rollback
                      </Button>
                    </div>
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    {version.date} • {version.author}
                  </div>
                  <div className="text-xs mt-1">{version.changes}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};
