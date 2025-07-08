import { Icon } from "@/components/icon";
// import { usePathname, useRouter } from "@/routes/hooks";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { OrgAdministrator } from "#/entity";
import { USERS } from "./user";
import SimpleSearchBar from "@/layouts/components/simple-search-bar";
import { useState } from "react";

export default function UserPage() {
  // const { push } = useRouter();
  // const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");

  const columns: ColumnsType<OrgAdministrator> = [
    {
      title: "Nama",
      dataIndex: "name",
    },
    {
      title: "Jabatan",
      dataIndex: "position",
    },
    {
      title: "Kepengurusan",
      dataIndex: "structure_level",
    },
    {
      title: "Daerah",
      dataIndex: "region",
    },
    {
      title: "Periode Kepengurusan",
      dataIndex: "period",
    },
    // {
    //   title: "Role",
    //   dataIndex: "role",
    //   align: "center",
    //   width: 120,
    //   render: (role: Role_Old) => <Badge variant="info">{role.name}</Badge>,
    // },
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   align: "center",
    //   width: 120,
    //   render: (status) => (
    //     <Badge
    //       variant={
    //         status === BasicOrganizationStatus.ACTIVE ? "success" : "error"
    //       }
    //     >
    //       {status === BasicOrganizationStatus.ACTIVE ? "Berlaku" : "Habis"}
    //     </Badge>
    //   ),
    // },
    {
      title: "KTA",
      key: "operation",
      align: "center",
      width: 100,
      // render: (_, record) => (
      //   <div className="flex w-full justify-center text-gray-500">
      //     <Button
      //       variant="ghost"
      //       size="icon"
      //       onClick={() => {
      //         push(`${pathname}/${record.id}`);
      //       }}
      //     >
      //       <Icon icon="mdi:card-account-details" size={18} />
      //     </Button>
      //     {/* <Button variant="ghost" size="icon" onClick={() => {}}>
      //       <Icon icon="solar:pen-bold-duotone" size={18} />
      //     </Button>
      //     <Button variant="ghost" size="icon">
      //       <Icon
      //         icon="mingcute:delete-2-fill"
      //         size={18}
      //         className="text-error!"
      //       />
      //     </Button> */}
      //   </div>
      // ),
      render: () => (
        <Button variant="ghost" className="w-auto px-2" size="icon">
          <Icon icon="solar:user-id-outline" size={18} />
          Download KTA
        </Button>
      ),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>Data Pengurus</div>
          <Button onClick={() => {}}>Filter</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-3">
          <SimpleSearchBar
            placeholder="Cari berdasarkan nama"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>
        <Table
          className="custom-antd-table"
          rowKey="id"
          size="small"
          scroll={{ x: "max-content" }}
          pagination={false}
          columns={columns}
          dataSource={USERS}
        />
      </CardContent>
    </Card>
  );
}
