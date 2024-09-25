import { useParams } from "react-router-dom";
const NewsDetail = () => {
    const {newsId}=useParams();
    console.log(newsId)
  return (
    <>
      <h1>NewsDetail Component</h1>
    </>
  );
}
export default NewsDetail