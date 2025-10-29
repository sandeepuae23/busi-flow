import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Workflow, GitBranch, Play, History, Settings, FileText } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Workflow className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Workflow Platform</h1>
                <p className="text-xs text-muted-foreground">Enterprise BPMN Designer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Documentation
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Visual Workflow Designer
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Create, modify, and deploy enterprise payment workflows with our comprehensive
            BPMN 2.0 visual modeling platform. Design complex workflows with drag-and-drop
            simplicity.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/workflows/designer")}
            className="bg-primary hover:bg-primary-hover text-lg h-12 px-8"
          >
            <Workflow className="h-5 w-5 mr-2" />
            Open Workflow Designer
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow border-border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GitBranch className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              BPMN 2.0 Modeling
            </h3>
            <p className="text-sm text-muted-foreground">
              Full BPMN 2.0 support with events, tasks, gateways, and subprocesses. Industry-standard
              workflow notation.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-border">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Play className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Test & Deploy
            </h3>
            <p className="text-sm text-muted-foreground">
              Test workflows in sandbox environments before deploying to production. Validate and
              simulate execution.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-border">
            <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
              <History className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Version Control
            </h3>
            <p className="text-sm text-muted-foreground">
              Complete version history with comparison tools. Rollback to previous versions and
              track all changes.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-border">
            <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-warning" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Script Integration
            </h3>
            <p className="text-sm text-muted-foreground">
              Embed custom scripts in Groovy, JavaScript, or Python. Add business logic directly
              to your workflows.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-border">
            <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
              <Settings className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Extension Framework
            </h3>
            <p className="text-sm text-muted-foreground">
              Configure connectors, listeners, and extensions. Integrate with external systems
              seamlessly.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Workflow className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Real-time Monitoring
            </h3>
            <p className="text-sm text-muted-foreground">
              Monitor workflow execution in real-time. Track process instances and handle
              exceptions.
            </p>
          </Card>
        </div>

        {/* Quick Start */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Quick Start</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <p>
                  Click "Open Workflow Designer" to access the visual BPMN editor
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <p>
                  Drag BPMN elements from the palette onto the canvas to build your workflow
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <p>
                  Configure properties, add scripts, and set up variables in the right panel
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  4
                </div>
                <p>
                  Test your workflow in sandbox mode before deploying to production
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <Button
                onClick={() => navigate("/workflows/designer")}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                <Workflow className="h-4 w-4 mr-2" />
                Start Building Workflows
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Enterprise Workflow Platform • BPMN 2.0 Compliant • © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
