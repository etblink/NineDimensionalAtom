import Section from "@/components/layout/section";
import EquationDisplay from "@/components/equations/equation-display";
import TorusVisualization from "@/components/visualizations/torus-visualization";
import ProofSection from "@/components/proofs/proof-section";
import PlasmoidsSection from "@/components/sections/plasmoids-section";
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
          fractal scaling. This model bridges the gap between geometric mathematics and observable phenomena,
          offering new insights into the fundamental nature of matter and energy.
        </p>
      </Section>

      <Section title="Core Framework">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Nine Dimensions</h3>
              <ul className="space-y-2">
                <li><span className="font-medium">1-3:</span> Spatial dimensions (width, height, depth)</li>
                <li><span className="font-medium">4:</span> Time as oscillatory frequency</li>
                <li><span className="font-medium">5:</span> Amplitude/fractal scale governing self-similarity</li>
                <li><span className="font-medium">6:</span> Resonance coupling wave interactions</li>
                <li><span className="font-medium">7-8:</span> Dual polarities (positive/negative)</li>
                <li><span className="font-medium">9:</span> Oneness/completion (unifying dimension)</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Each dimension contributes to the model's ability to describe complex atomic phenomena
                and their interactions across scales.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Key Concepts</h3>
              <ul className="space-y-2">
                <li><span className="font-medium">Hopf Fibration:</span> Maps higher-dimensional structures to observable 3D space</li>
                <li><span className="font-medium">Vortex Dynamics:</span> Self-organizing energy flows and stable configurations</li>
                <li><span className="font-medium">Fractal Scaling:</span> Self-similarity across quantum to cosmic scales</li>
                <li><span className="font-medium">Toroidal Structures:</span> Fundamental geometric patterns in energy organization</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                These concepts form the foundation for understanding how energy and matter organize
                themselves at all scales of reality.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Mathematical Framework">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Nine-Dimensional Wave Function</h3>
            <EquationDisplay equation={equations.waveFunctionNineD} />
            <p className="mt-4 text-muted-foreground">
              This wave function describes the complete state of the system, incorporating all nine dimensions
              and their interactions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Unified Projection</h3>
            <EquationDisplay equation={equations.unifiedProjection} />
            <p className="mt-4 text-muted-foreground">
              The projection equation shows how the nine-dimensional framework manifests in observable
              four-dimensional spacetime.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Toroidal Geometry</h3>
            <div className="h-[400px] mb-4">
              <TorusVisualization />
            </div>
            <p className="text-muted-foreground">
              Interactive visualization demonstrating the fundamental toroidal structure that emerges
              from the Hopf fibration in three-dimensional space.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Mathematical Proofs">
        <ProofSection />
      </Section>

      <Section title="Plasmoids and Energy Structures">
        <PlasmoidsSection />
      </Section>

      <Section title="Physical Implications">
        <div className="space-y-6 prose dark:prose-invert max-w-none">
          <p className="text-lg">
            The model provides a unified framework for understanding fundamental aspects of reality:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Quantum Phenomena</h4>
                <ul className="space-y-2">
                  <li>Wave-particle duality through geometric structures</li>
                  <li>Quantum entanglement via higher-dimensional connections</li>
                  <li>Zero-point energy as a fundamental aspect</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Energy Dynamics</h4>
                <ul className="space-y-2">
                  <li>Self-organizing vortex flows</li>
                  <li>Stable plasmoid configurations</li>
                  <li>Coherent energy structures across scales</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Scale Relationships</h4>
                <ul className="space-y-2">
                  <li>Fractal patterns from quantum to cosmic scales</li>
                  <li>Self-similar structures in nature</li>
                  <li>Scale-invariant physical laws</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Unified Understanding</h4>
                <ul className="space-y-2">
                  <li>Integration of quantum and classical physics</li>
                  <li>Geometric basis for fundamental forces</li>
                  <li>Connection between form and function</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}