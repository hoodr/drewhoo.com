import { Box, Heading } from "grommet";

const Intro = () => {
  // className="text-5xl md:text-8xl font-bold tracking-tighter
  // leading-tight md:pr-8"
  // className="text-center md:text-left text-lg mt-5 md:pl-8"
  // <section className="flex-col md:flex-row flex items-center
  // md:justify-between mt-16 mb-16 md:mb-12"></section>
  return (
    <Box flex direction="row" align="center" justify="between" margin={{ top: "medium", bottom: "medium" }} >
      <Heading level={1} size="large" weight="bold">
        Drew Hoo
      </Heading>
      <Heading level={4} size="medium">
        A total hackjob of a blog
      </Heading>
    </Box>
  );
};

export default Intro;
