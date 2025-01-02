import HeroInner from "@/components/sections/hero-banners/HeroInner";
import BlogsPrimary from "@/components/sections/blogs/BlogsPrimary";

const BlogsMain = () => {
  return (
    <main>
      <HeroInner title={"Explorar sonidos"} currentItem={"Explorar sonidos"} />
      <BlogsPrimary />
    </main>
  );
};

export default BlogsMain;
