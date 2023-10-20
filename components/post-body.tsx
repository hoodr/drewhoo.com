import React, { useEffect } from "react";
import { useRemark } from "react-remark";
import { Page, PageContent } from "grommet";

// import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource(content);
  }, [content, setMarkdownSource]);

  return (
    <Page kind="narrow">
      <PageContent>
        {reactContent}
      </PageContent>
    </Page>
  );
};

export default PostBody;
