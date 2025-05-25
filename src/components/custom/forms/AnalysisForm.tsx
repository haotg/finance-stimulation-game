"use client";

import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { InputGroup } from "@/components/custom/InputGroup";
import { TextAreaGroup } from "@/components/custom/TextAreaGroup";
import { RatingGroup } from "@/components/custom/RatingGroup";
import { PieChartComponent } from "@/components/custom/charts/Pie";
import { Button } from "@/components/ui/button";
import { Analysis, AnalysisSchema } from "@/schemas/analysis.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function AnalysisForm() {
  const form = useForm<Analysis>({
    resolver: zodResolver(AnalysisSchema),
    defaultValues: {
      ebitda: 0,
      interestRate: 0,
      multiple: 0,
      factorScore: 0,
      companyName: "",
      description: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: Analysis) => {
    const { ebitda, interestRate, multiple } = data;
    if (ebitda && interestRate && multiple) {
      toast.success("Analysis submitted successfully", {
        action: {
          label: "Ok",
          onClick: () => {
            toast.dismiss();
          },
        },
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col md:gap-10 gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="md:flex gap-5 md:flex-row flex flex-col md:items-end">
          <div className="flex flex-col gap-4 flex-1">
            <InputGroup label="EBITDA" name="ebitda" />
            <InputGroup label="Interest Rate" name="interestRate" />
            <InputGroup label="Multiple" name="multiple" />
            <RatingGroup label="Factor Score" />
            <InputGroup label="Company Name" name="companyName" />
            <TextAreaGroup label="Description" name="description" />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <PieChartComponent />
          </div>
        </div>
        <Button className="mx-auto md:w-1/2 lg:w-1/3 w-full">Submit</Button>
      </form>
    </Form>
  );
}
