import VideoDialog from "@/components/custom/dialogs/Video";
import TextDialog from "@/components/custom/dialogs/Text";

interface VideoItem {
  id: string;
  title: string;
  url: string;
}

interface TextItem {
  id: string;
  title: string;
  content: string;
}

export default function SideBar() {
  const videos: VideoItem[] = [
    {
      id: "1",
      title: "Intro 1",
      url: "https://www.youtube.com/watch?v=4-MZZPdebGQ",
    },
    {
      id: "2",
      title: "Intro 2",
      url: "https://www.youtube.com/watch?v=RKoK4c5OfKE",
    },
  ];
  const texts: TextItem[] = [
    {
      id: "1",
      title: "Intro 1",
      content:
        "Financial simulation is a powerful tool in modern financial analysis and forecasting. It involves using mathematical and statistical models to simulate various financial scenarios, helping investors and financial managers make better decisions. Monte Carlo simulation is one of the most popular methods used for risk assessment and financial planning.",
    },
    {
      id: "2",
      title: "Intro 2",
      content:
        "A comprehensive guide to implementing financial simulation includes: 1) Define objectives and scope, 2) Collect and analyze data, 3) Construct models, 4) Run simulations, and 5) Analyze results. Key tools include Excel, MATLAB, Python and R. Success depends on quality input data and proper model validation.",
    },
  ];
  return (
    <aside className="w-full h-full md:w-16 flex flex-row md:flex-col items-center p-2 gap-4">
      <VideoDialog videos={videos} />
      <TextDialog texts={texts} />
    </aside>
  );
}
