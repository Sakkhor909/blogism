import Header from "../components/header.jsx";
import FeaturePost from "../components/featurePost.jsx";
import RecentPost from "../components/recentPost.jsx";
import TrendingPost from "../components/trendingPost.jsx";
export default function Home() {
  return (
    <>
      <Header />
      <div className="home-layout">
        <div className="first-column">
          <FeaturePost />
          <TrendingPost />
        </div>
        <RecentPost />
      </div>
    </>
  );
}
