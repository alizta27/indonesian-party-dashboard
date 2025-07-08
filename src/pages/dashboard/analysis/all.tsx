import { Chart } from "@/components/chart/chart";
import { useChart } from "@/components/chart/useChart";
import Icon from "@/components/icon/icon";
import { Button } from "@/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Progress } from "@/ui/progress";
import { Text, Title } from "@/ui/typography";
import { cn } from "@/utils";
import { dashboardData } from "./analysisData";

function Trend({ value }: { value: number }) {
  const trendClass =
    value > 0
      ? "text-success"
      : value < 0
      ? "text-error"
      : "text-muted-foreground";
  return (
    <span className={cn(trendClass, "flex items-center gap-1 font-bold")}>
      {value > 0 ? (
        <Icon
          icon="mdi:percent"
          className="inline-block align-middle"
          size={16}
        />
      ) : value < 0 ? (
        <Icon
          icon="mdi:percent"
          className="inline-block align-middle"
          size={16}
        />
      ) : null}
      {Math.abs(value)}%
    </span>
  );
}

export default function AllAnalysis() {
  const alllevelCreatedAnalythic = dashboardData.alllevelCreatedAnalythic;
  const conversionRate = dashboardData.conversionRate[1];
  const allKTATrafic = dashboardData.allKTATrafic;
  const legislatifData = dashboardData.legislatifDataAll[1];
  const organizationManajementProgress =
    dashboardData.organizationManajementProgress;

  const chartOptions = useChart({
    xaxis: { categories: alllevelCreatedAnalythic.chart.categories },
    tooltip: {
      y: {
        formatter: function (value) {
          return value + " %";
        },
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
    },
  });

  return (
    <div className="flex flex-col gap-4">
      {/* summary 区块 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-none shadow-none">
        <div>
          <Title as="h4" className="text-xl mb-1">
            Gambaran Umum Analisis Seluruh Daerah
          </Title>
          <Text variant="body2" className="text-muted-foreground">
            Lihat ringkasan data dan statistik penting untuk memahami
            perkembangan dan kebutuhan organisasi Anda.
          </Text>
        </div>
      </div>

      <div className="flex flex-col xl:grid grid-cols-4 gap-4">
        {/* Web analytic 主图表卡片 */}
        <Card className="col-span-4 xl:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>
              <Title as="h3" className="text-lg">
                Analisis Kepengurusan
              </Title>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-6 items-center">
              <div>
                <Text variant="subTitle2" className="text-muted-foreground">
                  Terbentuk
                </Text>
                <div className="flex items-end gap-2">
                  <Title as="h3" className="text-2xl">
                    {alllevelCreatedAnalythic.pageViews.toLocaleString()}
                  </Title>
                  <Trend value={alllevelCreatedAnalythic.pageViewsChange} />
                </div>
              </div>
              <div>
                <Text variant="subTitle2" className="text-muted-foreground">
                  Belum Terbentuk
                </Text>
                <div className="flex items-end gap-2">
                  <Title as="h3" className="text-2xl">
                    {alllevelCreatedAnalythic.avgTime}
                  </Title>
                  <Trend value={alllevelCreatedAnalythic.avgTimeChange} />
                </div>
              </div>
            </div>
            <div className="w-full min-h-[200px] mt-2">
              <Chart
                type="line"
                height={320}
                options={chartOptions}
                series={alllevelCreatedAnalythic.chart.series}
              />
            </div>
          </CardContent>
        </Card>

        {/* 右侧三小卡 */}
        <div className="xl:col-span-1 h-full">
          <div className="flex flex-col xl:flex-col md:flex-row gap-4 h-full">
            {[
              "Kepengurusan DPD",
              "Kepengurusan DPC",
              "Kepengurusan PAC",
              "Kepengurusan PR",
              "Kepengurusan PAR",
            ].map((label, idx) => (
              <Card key={`${label}-${idx}`} className="flex-1 !gap-0">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>
                    <Text variant="subTitle1">{label}</Text>
                  </CardTitle>
                  <CardAction className="rounded-full bg-emerald-200 p-2 w-10 h-10 flex items-center justify-center">
                    <Icon icon="ph:circle-wavy-check" size={20} color="black" />
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <Title as="h3" className="text-xl">
                    {conversionRate.value}
                  </Title>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Traffic data 表格 */}
        <Card className="col-span-12">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>
              <Title as="h3" className="text-lg">
                Progres Kepengurusan
              </Title>
            </CardTitle>
            <CardAction>
              <Button size="sm" variant="outline">
                <Icon icon="mdi:download" className="mr-1" />
                Export data
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2">LEVEL KEPENGURUSAN</th>
                    <th className="text-right p-2">JUMLAH PENGURUS</th>
                    <th className="text-right p-2">JUMLAH KEPENGURUSAN</th>
                    <th className="text-left p-2">PROGRESS TO GOAL (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {organizationManajementProgress.map((row) => (
                    <tr key={row.level} className="border-t">
                      <td className="p-2 font-mono">{row.level}</td>
                      <td className="p-2 text-right">
                        {row.administratorCount.toLocaleString()}
                      </td>
                      <td className="p-2 text-right">
                        {row.organizationCount.toLocaleString()}
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Progress value={row.progress} />
                          <span className="text-xs ml-2 align-middle">
                            {row.progress}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Top pages */}
        <Card className="col-span-12 md:col-span-6 xl:col-span-6">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>
              <Title as="h3" className="text-lg">
                Aktivitas Pembuatan KTA Terbaru
              </Title>
            </CardTitle>
            <CardAction>
              <Button size="sm" variant="outline">
                <Icon icon="mdi:eye" className="mr-1" />
                Selengkapnya
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-1">NAMA</th>
                    <th className="text-right py-1">DAERAH ASAL</th>
                  </tr>
                </thead>
                <tbody>
                  {allKTATrafic.map((row, idx) => (
                    <tr key={`${row.name} - ${idx}`} className="border-t">
                      <td className="py-2">{row.name}</td>
                      <td className="py-2">
                        <div className="flex items-center gap-2 justify-end">
                          {row.region}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Data Legislatif */}
        <Card className="col-span-12 md:col-span-6 xl:col-span-6">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>
              <Title as="h3" className="text-lg">
                Data Legislatif
              </Title>
            </CardTitle>
            <CardAction>
              <Button size="sm" variant="outline">
                <Icon icon="mdi:download" className="mr-1" />
                Export data
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-1">KETERANGAN</th>
                  <th className="text-right py-1">SUARA</th>
                  <th className="text-right py-1">KURSI</th>
                </tr>
              </thead>
              <tbody>
                {legislatifData.map((row) => (
                  <tr key={row.name} className="border-t">
                    <td className="py-2 flex items-center gap-2">
                      {row?.name}
                    </td>
                    <td className="py-2 text-right">
                      {row?.totalCount?.toLocaleString()}
                    </td>
                    <td className="py-2 text-right">{row?.chair}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
