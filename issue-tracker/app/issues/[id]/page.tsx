import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
interface Props {
  params: { id: string };
}
const IssueDeatilPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading as="h2">{issue.title}</Heading>
      <Flex gap="3" my="5">
        <IssueStatusBadge status={issue.status}></IssueStatusBadge>
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>{issue.description}</Card>
    </div>
  );
};
export default IssueDeatilPage;
