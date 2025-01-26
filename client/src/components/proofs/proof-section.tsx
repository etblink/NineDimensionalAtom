import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EquationDisplay from "@/components/equations/equation-display";
import { equations } from "@/lib/equations";

export default function ProofSection() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Nine-Dimensional Wave Function</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>The fundamental wave function is defined as:</p>
            <EquationDisplay equation={equations.waveFunctionNineD} />
            <p>With the Hamiltonian operator:</p>
            <EquationDisplay equation={equations.hamiltonianOperator} />
            <p>This satisfies the conservation law:</p>
            <EquationDisplay equation={equations.conservationLaw} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scale Invariance Theorem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>The wave function exhibits scale invariance under the transformation:</p>
            <EquationDisplay equation={equations.scaleInvariance} />
            <p>This property ensures that the model's predictions are consistent across different scales of observation.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hopf Fibration Mapping</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>The core geometric structure is based on the Hopf fibration:</p>
            <EquationDisplay equation={equations.hopfFibration} />
            <p>Which manifests in physical space through the energy density:</p>
            <EquationDisplay equation={equations.energyDensity} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resonance and Duality Relations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>The resonance condition for stable states:</p>
            <EquationDisplay equation={equations.resonanceCondition} />
            <p>Complemented by the duality relation:</p>
            <EquationDisplay equation={equations.dualityRelation} />
            <p>These satisfy the quantum mechanical commutation relations:</p>
            <EquationDisplay equation={equations.commutationRelations} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
