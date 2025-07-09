import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/ui/form";
import { Input } from "@/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import DropZone from "./drop-zone";
import { Text } from "@/ui/typography";

type FieldType = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  code?: string;
};

function UserAccount() {
  const form = useForm<FieldType>({
    defaultValues: {
      name: "DPC",
      email: "Prov. Contoh",
      phone: "Kota Contoh",
      address: "Kec. Contoh",
      city: "Kel. Contoh",
      code: "Dusun Contoh",
    },
  });

  const handleClick = () => {
    toast.success("Pengurus berhasil di tambahkan!");
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="col-span-1">
        <Card className="flex-col items-center px-6! pb-10! pt-10!">
          <DropZone />
        </Card>
      </div>
      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Form Data Pengurus</CardTitle>
            <Text variant="subTitle2">
              Lengkapi data di bawah ini dengan benar untuk mengupload data
              pengurus
            </Text>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kepengurusan</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Provinsi</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kabupaten/Kota</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kecamatan</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desa/Kelurahan</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dusun</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="cursor-pointer" onClick={handleClick}>
              Upload Data Pengurus
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default UserAccount;
