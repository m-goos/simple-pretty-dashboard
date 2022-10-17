import { ReactNode } from 'react';

interface DataTitleProps {
  title: string;
  icon: ReactNode;
}

function DataTitle({ title, icon }: DataTitleProps) {
  return (
    <div className="flex items-center py-2 px-1 text-xl font-medium">
      <span className="h-7 w-7 pr-2">{icon}</span>
      <span className="pb-2">{title}</span>
    </div>
  );
}

export default DataTitle;
