import { useEffect, useRef } from 'react';
import katex from 'katex';

interface EquationDisplayProps {
  equation: string;
  displayMode?: boolean;
}

export default function EquationDisplay({ equation, displayMode = true }: EquationDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(equation, containerRef.current, {
        displayMode,
        throwOnError: false,
        output: 'html',
      });
    }
  }, [equation, displayMode]);

  return (
    <div 
      ref={containerRef} 
      className="overflow-x-auto p-4 bg-secondary/10 rounded-lg"
    />
  );
}
