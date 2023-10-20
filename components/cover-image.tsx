import Link from "next/link";
import { Box, Image as GrommetImage } from "grommet";

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  // className={cn("shadow-sm w-full", {
  // "hover:shadow-lg transition-shadow duration-200": slug,})}
  const image = (
    <GrommetImage
      fill={true}
      src={src}
      alt={`Cover Image for ${title}`}

      width={1300}
      height={630}
    />
  );
  return (
    <Box width={{max: "100%"}}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </Box>
  );
};

export default CoverImage;
