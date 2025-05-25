"use client";

import { Pie, PieChart } from "recharts";
import { toInt } from "radash";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";

interface ChartData {
  browser: string;
  visitors: number;
  fill: string;
}

const chartConfig = {
  interestRate: {
    label: "Interest Rate",
  },
  remaining: {
    label: "Remaining",
  },
} satisfies ChartConfig;

export function PieChartComponent() {
  const { watch } = useFormContext();
  const [ebitda, interestRate, multiple] = watch([
    "ebitda",
    "interestRate",
    "multiple",
  ]);

  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    setChartData([
      {
        browser: "interest-rate",
        visitors: toInt(interestRate),
        fill: "var(--color-pie-primary)",
      },
      {
        browser: "remaining",
        visitors: 100 - toInt(interestRate),
        fill: "var(--color-pie-secondary)",
      },
    ]);
  }, [ebitda, interestRate, multiple]);

  const valuation = useMemo(() => {
    return toInt((ebitda ?? 0) * (interestRate ?? 0) * (multiple ?? 0));
  }, [ebitda, interestRate, multiple]);

  const getFormula = () => {
    const parts = [];
    parts.push(ebitda ? "EBITDA" : "0");
    parts.push(interestRate ? "Interest Rate" : "0");
    parts.push(multiple ? "Multiple" : "0");
    return parts.join(" × ");
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Valuation: {valuation}</CardTitle>
        <CardDescription>{getFormula()}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="visitors"
              label={({ x, y, value }) => {
                return (
                  <text x={x + 5} y={y} textAnchor="middle">
                    {value}
                  </text>
                );
              }}
              nameKey="browser"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Percentage of Valuation of the company
        </div>
      </CardFooter>
    </Card>
  );
}
