type FlexColumnProps = {
  children: React.ReactNode;
  className?: string;
};

const FlexColumn = ({ children, className }: FlexColumnProps) => {
  return <div className={className}>{children}</div>;
};

export default FlexColumn;
