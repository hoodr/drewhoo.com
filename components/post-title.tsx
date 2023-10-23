import { ReactNode } from "react";
import { Heading } from "grommet";

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  // TODO: Bold font + make it more dynamic
  // <h1 className="text-5xl
  // md:text-7xl lg:text-8xl font-bold tracking-tighter
  // leading-tight md:leading-none mb-12 text-center
  // md:text-left"></h1>
  return (
    <Heading
      level={1}
      color="#000000"
      size="large"
      margin={{ bottom: "medium" }}
    >
      {children}
    </Heading>
  );
};

export default PostTitle;

