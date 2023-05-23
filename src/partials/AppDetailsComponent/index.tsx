import FlexColumn from "../../common/components/FlexColumn";

type AppDetailsComponentProps = {
  children: React.ReactNode;
};

const index = ({ children }: AppDetailsComponentProps) => {
  return (
    <FlexColumn className="gap-3 group !items-start rounded-10 transition-colors hover:bg-blue-light relative max-w-[599px] w-full p-4 text-left">
      <div>{children}</div>
      <div className="absolute h-6 w-6 hidden sm:group-hover:block transition-colors rounded-bl-md top-[calc(50%-12px)] -left-[12px] rotate-45 bg-blue-light" />
    </FlexColumn>
  );
};

export default index;
