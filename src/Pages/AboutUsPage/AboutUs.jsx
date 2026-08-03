import HeroSection from "./../../Components/Helper/HeroSection/HeroSection";
import NumberBox from "../../Components/HomeCopm/NumberBox/NumberBox";
import Fetuers from "../../Components/AboutusCopm/FetuersSection/Fetuers";
import Badge from "./../../Components/Helper/Badge/Badge";
import { teamMembers } from "../../data/data";
import MemberCard from './../../Components/AboutusCopm/MemberCard/MemberCard';
import Contact from './../../Components/HomeCopm/ContactUs/Contact';

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="من نحن"
        headtitleone="مهمتنا هي"
        headcolortitle=" الإعلام والإلهام"
        details="مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.

"
      >
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
      {/*Fetuers*/}
      <Fetuers />
      {/*Our Team*/}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <Badge text={"فريقنا"} />

          <h2 className="text-4xl font-bold text-white mb-4 mt-4">
            تعرف على كتابنا
          </h2>

          <p className="text-neutral-400 max-w-xl mx-auto">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
            المجتمع.
          </p>
        </div>
        {/*Card Team*/}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
        </div>
        </div>
      </section>
      {/* Contact us */}
      <Contact/>
    </div>
  );
}
