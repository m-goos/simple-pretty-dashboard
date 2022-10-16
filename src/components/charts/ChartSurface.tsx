import { ReactNode } from 'react';

interface ChartSurfaceProps {
  children: ReactNode;
}

function ChartSurface({ children }: ChartSurfaceProps) {
  return (
    <div
      className="rounded-md
  border p-2 shadow-sm hover:bg-gray-200"
    >
      {children}
    </div>
  );
}

export default ChartSurface;
