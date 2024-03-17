"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/app/components";

const AssigneeSelect = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"], // 用于缓存的 key，在不同地方调用 useQuery 若 key 一样则不会重复获取
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data), // 用于获取数据的函数
    staleTime: 60 * 1000, // 数据缓存多久
    retry: 3, // 最多重复获取几次
  });
  if (error) return null;
  if (isLoading) return <Skeleton />;

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item value={user.id} key={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
export default AssigneeSelect;
