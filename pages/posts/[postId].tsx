import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailsProps {}

export default function PostDetailsPage(props: PostDetailsProps) {
    const router = useRouter()
  return <div>
    <h1>Post Details Page</h1>
    <p>Query : {JSON.stringify(router.query)}</p>
  </div>;
}
