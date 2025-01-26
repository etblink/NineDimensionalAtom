export const equations = {
  waveFunctionNineD: `\\Psi(x_1,x_2,x_3,\\nu,\\alpha,\\rho,p_1,p_2,\\Omega) \\in \\mathbb{C}`,

  unifiedProjection: `\\Psi_{unified}(r,\\theta,\\phi,t)=\\int\\Psi(x_1,x_2,x_3,\\nu,\\alpha,\\rho,p_1,p_2,\\Omega)\\,d\\nu\\,d\\alpha\\,d\\rho\\,dp_1\\,dp_2\\,d\\Omega`,

  toroidalCoordinates: `\\begin{aligned}
    x &= (R + r\\cos\\theta)\\cos\\phi \\\\
    y &= (R + r\\cos\\theta)\\sin\\phi \\\\
    z &= r\\sin\\theta
  \\end{aligned}`,

  // New equations for proofs
  hamiltonianOperator: `\\hat{H} = -\\frac{\\hbar^2}{2m}\\nabla^2 + V(\\mathbf{r}) + \\sum_{i=4}^9 \\hat{O}_i`,

  scaleInvariance: `\\Psi(\\lambda x_1,\\lambda x_2,\\lambda x_3,\\nu,\\alpha/\\lambda,\\rho,p_1,p_2,\\Omega) = \\Psi(x_1,x_2,x_3,\\nu,\\alpha,\\rho,p_1,p_2,\\Omega)`,

  hopfFibration: `\\pi: S^3 \\rightarrow S^2`,

  energyDensity: `\\mathcal{E}(\\mathbf{r}) = \\int |\\Psi_{unified}(\\mathbf{r},t)|^2 dt`,

  resonanceCondition: `\\omega_n = n\\omega_0 \\quad \\text{where} \\quad n \\in \\mathbb{N}`,

  dualityRelation: `p_1 p_2 = \\text{constant} \\cdot e^{i\\theta}`,

  commutationRelations: `[\\hat{x}_i, \\hat{p}_j] = i\\hbar\\delta_{ij}`,

  conservationLaw: `\\frac{d}{dt}\\int |\\Psi|^2 d^9x = 0`
};