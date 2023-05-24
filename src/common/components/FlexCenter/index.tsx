type FlexCenterProps = {
  children: React.ReactNode;
  className?: string;
};

const FlexCenter = ({ children, className }: FlexCenterProps) => {
  return <div className={className}>{children}</div>;
};

export default FlexCenter;
