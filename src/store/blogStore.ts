import { create } from "zustand"


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  slug: string;
}

interface BlogState {
  posts: Post[];
  loading: boolean;
  searchQuery: string;
  setPosts: (posts: Post[]) => void;
  setLoading: (loading: boolean) => void;
  setSearchQuery: (query: string) => void;
}

const useBlogStore = create<BlogState>((set) => ({
  posts: [],
  loading: false,
  searchQuery: '',
  setPosts: (posts: Post[]) => set({ posts }),
  setLoading: (loading: boolean) => set({ loading }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

export default useBlogStore;