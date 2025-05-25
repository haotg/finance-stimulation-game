import Header from "@/components/custom/Header";
import { HAccordion } from "@/components/custom/HAccordion";
import SideBar from "@/components/custom/SideBar";
import { AnalysisForm } from "@/components/custom/forms/AnalysisForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <div className="md:flex md:flex-row flex flex-col">
        <SideBar />
        <div className="flex-1 bg-background border-t md:border-t-0 border-l-0 md:border-l border-gray-200 md:pl-4 pt-4 md:pt-0">
          <div className="flex flex-col md:gap-10 gap-4">
            <HAccordion />
            <AnalysisForm />
          </div>
        </div>
      </div>
    </div>
  );
}
