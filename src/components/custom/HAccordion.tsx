import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const HAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full shadow-sm">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:bg-gray-50 px-4">
          Financial Negotiation Simulation
        </AccordionTrigger>
        <AccordionContent className="px-4">
          <div className="space-y-4">
            <p className="text-gray-700">
              Welcome to the Financial Negotiation Simulation! This is an
              interactive simulation game where two teams engage in negotiating
              financial terms.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How it Works:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Team 1 proposes initial term values</li>
                <li>Team 2 reviews and responds to the proposals</li>
                <li>Both teams negotiate to reach a mutual agreement</li>
                <li>
                  Negotiation terms include: contract value, payment terms,
                  penalty conditions, etc.
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Objectives:</h3>
              <p className="text-gray-700">
                This simulation helps participants:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Develop negotiation skills in a financial context</li>
                <li>Understand the impact of decisions on final outcomes</li>
                <li>Practice strategic decision-making</li>
                <li>Learn to balance interests between parties</li>
              </ul>
            </div>

            {/* <div className="flex justify-end mt-4">
              <Button variant="outline" className="mr-2">
                View Tutorial
              </Button>
              <Button>Start Simulation</Button>
            </div> */}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
