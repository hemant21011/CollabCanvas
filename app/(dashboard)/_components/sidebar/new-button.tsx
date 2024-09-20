
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";

const NewButton = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen p-4">
      <Dialog>
        <DialogTrigger asChild>
        </DialogTrigger>
        <DialogContent className="p-0 border-none max-w-[480px] bg-gray-100 rounded-md">
          <CreateOrganization  />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewButton;
