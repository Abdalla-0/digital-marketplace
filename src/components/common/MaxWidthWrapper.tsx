type TMaxWidthWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({ className, children }: TMaxWidthWrapperProps) => {
  return (
    <div
      className={`w-full max-w-screen-xl mx-auto px-2.5 md:px-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
