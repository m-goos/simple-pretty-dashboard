interface DataTitleProps {
  title: string;
}

function DataTitle({ title }: DataTitleProps) {
  return <div className="py-2 text-xl font-medium">{title}</div>;
}

export default DataTitle;
