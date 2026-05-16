import SiteNav from "@/components/SiteNav";
import SiteFoot from "@/components/SiteFoot";
import Hero from "@/components/Hero";
import StackViz from "@/components/StackViz";
import Worlds from "@/components/Worlds";
import Mappings from "@/components/Mappings";
import History from "@/components/History";
import Future from "@/components/Future";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <StackViz />
        <Worlds />
        <Mappings />
        <History />
        <Future />
      </main>
      <SiteFoot />
    </>
  );
}
