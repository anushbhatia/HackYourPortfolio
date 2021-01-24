  
import { useState } from 'react';

import Container from './Navbar';
import BlogPost from './BlogPost';

export default function Blog({ posts }) {

    return (
      <div>
    <Container></Container>
      <div className="flex flex-col justify-center items-start max-w-6xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <div className="relative w-full mb-4">
        </div>
            <BlogPost
              title="Facebook shows off major redesign coming to desktop"
              summary="Who doesn’t have a Facebook account?.. umm. At least we all had. There was a time when every notification was important to us. For most of us, Facebook provided a window into this glorious world of social media. But with time, platforms like Snapchat, Instagram got us hooked so badly most of us forgot about this legend.
              "
            />
      </div>
</div>
  );
}
