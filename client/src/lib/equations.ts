export const equations = {
  waveFunctionNineD: `\\Psi(x_1,x_2,x_3,\\nu,\\alpha,\\rho,p_1,p_2,\\Omega) \\in \\mathbb{C}`,
  
  unifiedProjection: `\\Psi_{unified}(r,\\theta,\\phi,t)=\\int\\Psi(x_1,x_2,x_3,\\nu,\\alpha,\\rho,p_1,p_2,\\Omega)\\,d\\nu\\,d\\alpha\\,d\\rho\\,dp_1\\,dp_2\\,d\\Omega`,

  toroidalCoordinates: `\\begin{aligned}
    x &= (R + r\\cos\\theta)\\cos\\phi \\\\
    y &= (R + r\\cos\\theta)\\sin\\phi \\\\
    z &= r\\sin\\theta
  \\end{aligned}`,
};
