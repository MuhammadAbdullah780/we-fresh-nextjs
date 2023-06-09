type ServicesWrapperProps = {
  src: string
  text: string
}

const index = ({ src, text }: ServicesWrapperProps) => {
  return (
    <div
      className={`p-3 flex-col flex gap-3 transition-transform duration-200 items-center justify-center rounded-10 group hover:scale-105`}
    >
      <div className="max-w-[120px] w-full h-[120px]">
        <img src={src} className="w-full h-full" alt={text} />
      </div>
      <p className="text-center f-22 !w-full !max-w-[241px] group-hover:text-txt-blue ">
        {text}
      </p>
    </div>
  );
};

export default index;
