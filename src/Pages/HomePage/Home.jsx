import HeroSection from "../../Components/Helper/HeroSection/HeroSection";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import NumberBox from "../../Components/HomeCopm/NumberBox/NumberBox";
import MainTitle from "../../Components/HomeCopm/MainTitle/MainTitle";
import CardBlog from "./../../Components/BlogCopm/CardBlog/CardBlog";
import { data } from "../../data/data";
import Categories from "./../../Components/HomeCopm/CategorySection/Categories";
import CardPost from "./../../Components/BlogCopm/CardGridBlog/CardPost";
import Contact from "../../Components/HomeCopm/ContactUs/Contact";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="مرحباً بك في عدسة"
        headtitleone="اكتشف"
        headcolortitle=" فن"
        headtitletow="التصوير الفوتوغرافي"
        details="انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير."
        // icon={<i className="fa-solid fa-newspaper"></i>}
      >
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
          <Link
            to="/blog"
            className={`btn ${styles.btnorange} text-white px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 ${styles.heroBtnPrimary}`}
          >
            <span>استكشف المقالات</span>
            <i className={`fa-solid fa-arrow-left ${styles.heroArrow}`}></i>
          </Link>

          <Link
            to="/about"
            className={`btn ${styles.btnoutlineorange} px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2`}
          >
            <i className="fa-solid fa-circle-info"></i>
            <span>اعرف المزيد</span>
          </Link>
        </div>{" "}
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <NumberBox
              icon="fa-solid fa-newspaper"
              number="+50"
              title="مقالة"
            />
          </div>

          <div className="col-6 col-md-3">
            <NumberBox icon="fa-solid fa-users" number="+10K" title="عميل" />
          </div>

          <div className="col-6 col-md-3">
            <NumberBox icon="fa-solid fa-award" number="+25" title="جائزة" />
          </div>

          <div className="col-6 col-md-3">
            <NumberBox icon="fa-solid fa-star" number="4.9" title="التقييم" />
          </div>
        </div>
      </HeroSection>
      {/* Spitieal Blogs */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainTitle
            text={"مميز"}
            btntext={"عرض الكل"}
            desc={"محتوى منتقى لبدء رحلة تعلمك"}
            title={"مقالات مختارة"}
            link={"/blog"}
          />
          <div className="row g-4">
            {data.posts.slice(0, 3).map((post) => (
              <div className="col-12" key={post.id}>
                <CardBlog {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Category*/}
      <Categories />
      {/*New Blogs*/}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainTitle
            text={"الأحدث"}
            btntext={"عرض جميع المقالات"}
            desc={" محتوى جديد طازج من المطبعة"}
            title={" أحدث المقالات"}
            link={"/blog"}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.slice(-3).map((post) => (
              <CardPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
      {/*Contact*/}
      <Contact />
    </>
  );
}
