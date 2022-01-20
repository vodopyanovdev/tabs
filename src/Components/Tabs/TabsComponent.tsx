import { FC, useState } from 'react';
import { IPost } from '../../interfaces/interfaces';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

interface TabsProps {
  response: any;
}

export const TabsComponent: FC<Required<TabsProps>> = ({ response }) => {
  console.log(response);
  const { results: post } = response;

  const [tab, setTab] = useState<number>(0);

  const groupingPosts = post.reduce((acc: any, post: IPost) => {
    acc[post.pillarName] = acc[post.pillarName] || [];
    acc[post.pillarName].push(post);
    return acc;
  }, {});

  let tabs: string[] = [];

  for (let tab in groupingPosts) {
    tabs.push(tab);
  }

  const handleChange = (i: number) => {
    setTab(i);
  };

  return (
    <>
      <Tabs value={tab}>
        {tabs.map((tab: string, i: number) => {
          return <Tab onClick={() => handleChange(i)} label={tab} />;
        })}
      </Tabs>
      <TabPanel value={{ tab, groupingPosts }}></TabPanel>
    </>
  );
};

interface TabPanelProps {
  value: {
    tab: number;
    groupingPosts: [];
  };
}

const TabPanel: FC<TabPanelProps> = ({ value }) => {
  const posts: [] = Object.values(value.groupingPosts)[value.tab];
  return (
    <>
      {posts.map((post: IPost) => (
        <Box
          sx={{
            padding: '1rem',
          }}
        >
          <Link target="_blank" href={post.webUrl} rel="noopener">
            {post.webTitle}
          </Link>
        </Box>
      ))}
    </>
  );
};
