import Pagination from "../../components/common/pagination/Pagination";
import { usePaginationStore } from "../../stores/usePagination.store";

const News = () => {

  const {
    currentPage,
    postPerPage,
    posts,
  } = usePaginationStore();

  const end = currentPage * postPerPage;
  const start = end - postPerPage;
  const currentPosts = posts.slice(start, end);
  return (
    <>
      <div>
        {currentPosts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <Pagination/>
    </>
  );
}
export default News