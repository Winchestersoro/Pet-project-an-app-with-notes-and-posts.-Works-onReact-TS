import { useMemo } from "react"

interface Post {
    id: number;
    title: string;
    body: string;
  }


  export const useSortedPosts = (posts: Post[], sort: string): Post[] => {
    const sortedPosts = useMemo(() => {
      if (sort) {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
      }
      return posts;
    }, [sort, posts]);
    return sortedPosts;
  }
  export const usePosts = (posts: Post[], sort: string, query: string): Post[] => {
    const sortedPosts = useSortedPosts(posts, sort);
    
    const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);
    
    return sortedAndSearchedPosts;
  }