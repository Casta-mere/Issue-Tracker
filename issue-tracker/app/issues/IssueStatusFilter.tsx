"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const setStatusFilter = (status: string) => {
    if (status === "All") {
      router.push("/issues");
      return;
    }
    const query = status ? `?status=${status}` : "";
    router.push("/issues" + query);
  };

  return (
    <Select.Root defaultValue="All" onValueChange={setStatusFilter}>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item
            key={status.value || "All"}
            value={status.value || "All"}
          >
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};
export default IssueStatusFilter;
