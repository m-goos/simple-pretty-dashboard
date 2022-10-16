interface ChartTitleProps {
  title: string;
}

function ChartTitle({ title }: ChartTitleProps) {
  return <div className="py-2 text-xl font-medium">{title}</div>;
}

export default ChartTitle;
