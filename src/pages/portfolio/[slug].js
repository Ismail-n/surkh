// pages/portfolio/[slug].js
import PortfolioDetails from "@/components/portfolio/Details/PortfolioDetails";
import SEO from "@/components/SEO";
import { portfolioDetails } from "@/data/portfolioDetailsData";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getStaticPaths() {
  const paths = portfolioDetails.map(item => ({
    params: { slug: item.id },
  }));

  return {
    paths,
    fallback: false, // MUST be false for static export
  };
}

export async function getStaticProps({ params }) {
  const item = portfolioDetails.find(d => d.id === params.slug);

  return {
    props: { item },
  };
}


const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    console.log("slug:", slug);
  }, [slug]);

  if (!slug) return <div>Loading...</div>;

  return (
    <>
      <SEO
        title="Portfolio Details"
        description="Explore our portfolio at TOD — a showcase of innovative web projects, creative UI/UX designs, and cutting-edge digital solutions crafted with precision and passion."
      />
      <main className="portfolio_details">
        <PortfolioDetails slug={slug} />
      </main>
    </>
  );
};

export default ProjectDetail;
