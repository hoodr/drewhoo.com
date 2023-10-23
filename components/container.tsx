import { Box } from "grommet";

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  // className="container mx-auto px-5"
  return (
    <Box
      pad="large"
      width={{ min: "small", max: "xxlarge" }}
      responsive>
      {children}
    </Box>
  );
};

export default Container;
