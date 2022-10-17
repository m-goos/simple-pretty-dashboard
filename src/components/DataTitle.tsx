import { ReactNode } from 'react';

interface DataTitleProps {
  title: string;
  icon: ReactNode;
}

function DataTitle({ title, icon }: DataTitleProps) {
  return (
    <div className="flex items-center py-1 px-1 text-sm font-medium sm:py-2 sm:text-xl xl:text-2xl">
      <span className="h-7 w-7 pr-2">{icon}</span>
      <span className="pb-2">{title}</span>
    </div>
  );
}

export default DataTitle;
