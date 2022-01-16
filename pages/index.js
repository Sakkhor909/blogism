import Header from "../components/header.jsx";
import FeaturePost from "../components/featurePost.jsx";
import RecentPost from "../components/recentPost.jsx";
import TrendingPost from "../components/trendingPost.jsx";
import HotTopics from "../components/hotTopics.jsx";
import Footer from "../components/footer.jsx";

export async function getServerSideProps() {
  let Posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .catch((err) =>
      console.error(`There is error in jsonplaceholder data fetching ${err}`)
    );
  const RecentPosts = Posts.slice(0, 4);
  const TrendingPosts = Posts.slice(4, 8);
  return {
    props: {
      RecentPosts,
      TrendingPosts
    }
  };
}

export default function Home({ RecentPosts, TrendingPosts, HotPosts }) {
  return (
    <>
      <Header />
      <div className="home-layout">
        <div className="first-row">
          <div className="first-column">
            <FeaturePost />
            <TrendingPost TrendingPosts={TrendingPosts} />
          </div>
          <RecentPost RecentPosts={RecentPosts} />
        </div>
        <HotTopics />
      </div>
      <Footer />
    </>
  );
}
