import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";

const EmptyOrg = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
      {/* Centered Image */}
      <Image
        src="/element.png"
        alt="empty"
        height={200}
        width={200}
        className="rounded-full shadow-xl object-cover"
      />
      
      {/* Heading */}
      <h2 className="text-3xl font-bold mt-8 text-gray-800">
        Welcome to CollabCanvas
      </h2>
      
      {/* Subheading */}
      <p className="text-gray-600 mt-4 text-lg">
        Create an organization to get started.
      </p>

      {/* Dialog for Creating Organization */}
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="px-6 py-3 text-lg">
              Create Organization
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 border-none max-w-[480px] bg-gray-100 rounded-md">
          <CreateOrganization routing="hash" />
        </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
