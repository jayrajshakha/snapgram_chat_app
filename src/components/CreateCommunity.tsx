import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import {
  ID,
  communityCallectionId,
  database,
  databaseId,
} from "../config/AppwriteConfig";
import { toast } from "react-toastify";
import { AppwriteException } from "appwrite";
import { communitiesStore } from "../data/CommunityStore";

export default function CreateCommunity() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [community, setCommunity] = useState("");
  const [loading, setLoading] = useState(false);

  const communityState = communitiesStore();

  const handlerSubmit = () => {
    setLoading(true);

    const databasePromise = database.createDocument(
      databaseId,
      communityCallectionId,
      ID.unique(),
      {
        Name: community,
      }
    );
    databasePromise
      .then((res) => {
        setLoading(false);
        communityState.AddCommunities(res);
        toast.success("Community Created Successfully");
      })
      .catch((err: AppwriteException) => {
        setLoading(false);
        toast.error(err.message, { theme: "colored" });
      });
  };

  return (
    <>
      <button className="sm:inline-block sm:w-26 " onClick={onOpen}>
        Add Community
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {" "}
                Creating New Community
              </ModalHeader>
              <ModalBody>
                <p>
                  Create a Communities in you intrested topics and add your
                  friends in Your Community.
                </p>
                <Input
                  type="text"
                  onChange={(e) => setCommunity(e.target.value)}
                  value={community}
                  label={"Create Community"}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  onClick={handlerSubmit}
                  disabled={loading || community === ""}
                  color="primary"
                  onPress={onClose}
                >
                  {loading ? "Loading..." : "Add"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
