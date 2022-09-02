export const ContentText = ({ children }: { children?: string | null }) => {
  return <span className="text-sm sm:text-base">{children}</span>;
};

export const TitleText = ({ children }: { children?: string | null }) => {
  return <span className="text-md sm:text-xl">{children}</span>;
};
