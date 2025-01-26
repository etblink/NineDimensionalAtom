import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TorusVisualization from "@/components/visualizations/torus-visualization";

export default function PlasmoidsSection() {
  return (
    <div className="space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          Plasmoids are self-organizing plasma structures that exhibit remarkable stability and coherence.
          In the Nine-Dimensional Hopf-like Atom Model, they represent a crucial bridge between theoretical
          geometry and observable phenomena.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Key Characteristics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Toroidal magnetic field configuration</li>
              <li>• Self-stabilizing plasma dynamics</li>
              <li>• Nested vortex structures</li>
              <li>• Scale-invariant properties</li>
              <li>• Coherent energy flows</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Physical Manifestations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Ball lightning phenomena</li>
              <li>• Laboratory plasma experiments</li>
              <li>• Stellar coronae structures</li>
              <li>• Galactic plasma formations</li>
              <li>• Quantum vacuum interactions</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Relationship to the Nine-D Model</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              Plasmoids demonstrate the physical manifestation of the model's geometric principles:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Geometric Connection</h4>
                <ul className="space-y-1">
                  <li>• Mirror Hopf fibration structure</li>
                  <li>• Exhibit toroidal symmetry</li>
                  <li>• Display fractal organization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Energy Dynamics</h4>
                <ul className="space-y-1">
                  <li>• Self-sustaining vortex flows</li>
                  <li>• Resonant frequency patterns</li>
                  <li>• Stable energy configurations</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="aspect-w-16 aspect-h-9 bg-secondary/10 rounded-lg overflow-hidden">
        <div className="h-full">
          <TorusVisualization />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
          <p className="text-sm">
            Interactive visualization of a plasmoid's toroidal structure, demonstrating the
            fundamental geometry inherent in the Nine-Dimensional Model.
          </p>
        </div>
      </div>
    </div>
  );
}
