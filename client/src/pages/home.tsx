import Section from "@/components/layout/section";
import EquationDisplay from "@/components/equations/equation-display";
import TorusVisualization from "@/components/visualizations/torus-visualization";
import { Card, CardContent } from "@/components/ui/card";
import { equations } from "@/lib/equations";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nine-Dimensional Hopf-like Atom Model</h1>
      
      <Section title="Introduction">
        <p className="text-lg mb-6">
          The Nine-Dimensional Hopf-like Atom Model is a theoretical framework that reimagines atomic structure 
          through higher-dimensional geometry, integrating concepts from quantum mechanics, vortex dynamics, and 
          fractal scaling.
        </p>
      </Section>

      <Section title="Core Framework">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Nine Dimensions</h3>
              <ul className="space-y-2">
                <li>1-3: Spatial dimensions (width, height, depth)</li>
                <li>4: Time as frequency</li>
                <li>5: Amplitude/fractal scale</li>
                <li>6: Resonance</li>
                <li>7-8: Dual polarities</li>
                <li>9: Oneness/completion</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Key Concepts</h3>
              <ul className="space-y-2">
                <li>Hopf fibration geometry</li>
                <li>Vortex dynamics</li>
                <li>Fractal scaling</li>
                <li>Toroidal structures</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Mathematical Framework">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Nine-Dimensional Wave Function</h3>
            <EquationDisplay equation={equations.waveFunctionNineD} />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Unified Projection</h3>
            <EquationDisplay equation={equations.unifiedProjection} />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Toroidal Geometry</h3>
            <div className="h-[400px] mb-4">
              <TorusVisualization />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Physical Implications">
        <div className="space-y-6">
          <p>
            The model provides a unified framework for understanding:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Quantum behavior through geometric structures</li>
            <li>Energy flows and vortex dynamics</li>
            <li>The relationship between scale and dimension</li>
            <li>The emergence of stable atomic structures</li>
          </ul>
        </div>
      </Section>
    </main>
  );
}
