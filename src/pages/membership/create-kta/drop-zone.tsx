import { Upload } from "@/components/upload";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

export default function DropZone() {
  return (
    <Card title="Upload Multi File" className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-2">
            <span>Upload SK & Data Pengurus</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Upload
          name="multi"
          title="Upload SK & Data Pengurus"
          subtitle="Pilih File excel untuk data pengurus dan pilih file pdf untuk SK Kepengurusan, lalu masukkan kedua file tersebut di sini"
        />
      </CardContent>
    </Card>
  );
}
