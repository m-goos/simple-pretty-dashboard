import { ReactNode } from 'react';

interface DataSurfaceProps {
  children: ReactNode;
}

function DataSurface({ children }: DataSurfaceProps) {
  return (
    <div
      className="rounded-md
  border p-2 shadow-sm hover:bg-gray-200"
    >
      {children}
    </div>
  );
}

export default DataSurface;
