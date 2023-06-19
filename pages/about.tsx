import { MainLayout } from '@/components/layout';
import * as React from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const[postList, setPostList] = React.useState([])
  React.useEffect(()=>{
    ;(async() =>{
      const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
      const data = await response.json();

      setPostList(data.data)
    })()
  },[])

  return <div>
    <h1>About Page</h1>
    <ul className='post-list'>
      {postList.map((post:any) => <li key={post.id}>{post.title}</li>)}
    </ul>
  </div>;
}

AboutPage.Layout = MainLayout;
