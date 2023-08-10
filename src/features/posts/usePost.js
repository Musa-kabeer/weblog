import { useQuery } from '@tanstack/react-query';
import { getPost } from '../../services/apiPosts';

function usePost(id) {
  const {
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPost(id),
  });

  return { isLoading, post, error };
}

export default usePost;
