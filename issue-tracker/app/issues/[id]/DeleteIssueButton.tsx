import { Button } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";
const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <Cross2Icon />
      Delete Issue
    </Button>
  );
};
export default DeleteIssueButton;
