import Header from "../components/header.jsx";
import FeaturePost from "../components/featurePost.jsx";
import RecentPost from "../components/recentPost.jsx";
import TrendingPost from "../components/trendingPost.jsx";
import HotTopics from "../components/hotTopics.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-layout">
        <div className="first-row">
          <div className="first-column">
            <FeaturePost />
            <TrendingPost />
          </div>
          <RecentPost />
        </div>
        <HotTopics />
      </div>
      <Footer />
    </>
  );
}
