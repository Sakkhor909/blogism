import Header from "../components/header.jsx";
import FeaturePost from "../components/featurePost.jsx";
import RecentPost from "../components/recentPost.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-layout">
        <FeaturePost />
        <RecentPost />
      </div>
    </>
  );
}
