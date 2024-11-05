import { PieChart } from '@mui/x-charts/PieChart';

interface CategoryChartsProps {
  spendingEntries: string[][];
}

export function CategoryCharts({ spendingEntries }: CategoryChartsProps) {
  const categoryMap = new Map<string, number>();
  for (const entry of spendingEntries.slice(1)) {
    const amount = parseFloat(entry[3].replaceAll(/[$,]/g, ''))
    const category = entry[4];
    categoryMap.set(category, (categoryMap.get(category) ?? 0) + amount)
  }

  const totalChartData = Array.from(categoryMap.entries())
    .map(entry => {
      const [category, amount] = entry
      return {
        label: category,
        value: amount
      };
    });

  const everythingExceptHousingData = Array.from(categoryMap.entries())
    .filter(([category, _]) => category !== 'Housing')
    .map(entry => {
      const [category, amount] = entry
      return {
        label: category,
        value: amount
      };
    });

  return (
    <div className="CategoryCharts">
      <div className="CategoryCharts-chart CategoryCharts-chart--total">
        <PieChart
          series={[
            {
              data: totalChartData,
            },
          ]}
          width={740}
          height={200}
        />
      </div>
      <div className="CategoryCharts-chart CategoryCharts-chart--withoutHousing">
        <PieChart
          series={[
            {
              data: everythingExceptHousingData,
            },
          ]}
          width={740}
          height={200}
        />
      </div>
    </div>
  )
}