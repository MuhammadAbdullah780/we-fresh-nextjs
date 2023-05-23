type SectionHeadingProps = {
  className?: string;
  children: React.ReactNode;
};

const SectionHeading = ({ className, children }: SectionHeadingProps) => {
  return <div className={className}>{children}</div>;
};

export default SectionHeading;
