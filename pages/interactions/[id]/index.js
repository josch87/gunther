import { materialDelete, materialEdit } from "@/assets/Icons8";
import BackLink from "@/components/BackLink/BackLink";
import InteractionDetailsHeader from "@/components/InteractionDetailsHeader/InteractionDetailsHeader";
import InteractionDetailsSection from "@/components/InteractionDetailsSection/InteractionDetailsSection";
import Scopebox from "@/components/Scopebox/Scopebox";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { confirmAlert, onClose } from "react-confirm-alert";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import ConfirmModalAlert from "@/components/ConfirmModal/ConfirmModal";
import ConfirmModalTest from "@/components/ConfirmModal/ConfirmModal";

const ActionButtons = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  top: -13px;
  right: 13px;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export default function InteractionDetailsPage({
  interactions,
  contacts,
  onDeleteInteraction,
}) {
  const router = useRouter();
  const { id } = router.query;

  const interaction = interactions.find(
    (interaction) =>
      interaction.id === id &&
      (interaction.dateDeleted === null || interaction.dateDeleted === "")
  );

  if (id === undefined) {
    return <p>Loading interaction details...</p>;
  }

  if (interaction === undefined) {
    return <p>Interaction with the ID &apos;{id}&apos; not found</p>;
  }

  function confirmDeletion() {
    console.log("detete?");

    confirmAlert({
      title: "Warning",
      message: "Do you want to delete?",
      buttons: [
        { label: "Cancel", onClick: onClose },
        {
          label: "Delete",
          onClick: () => {
            onDeleteInteraction(id);
          },
        },
      ],
    });
  }

  return (
    <>
      <BackLink href="/interactions">← All Interactions</BackLink>

      <Scopebox>
        <ActionButtons>
          <Link href={`/interactions/${id}/edit`} title="Edit interaction">
            <Image
              src={materialEdit}
              alt="Edit interaction"
              height={25}
              width={25}
            />
          </Link>
          <DeleteButton
            title="Delete interaction"
            // onClick={() => onDeleteInteraction(id)}
            onClick={confirmDeletion}
          >
            <Image
              src={materialDelete}
              alt="Delete interaction"
              height={25}
              width={25}
            />
          </DeleteButton>
        </ActionButtons>

        <InteractionDetailsHeader interaction={interaction} />
        <InteractionDetailsSection
          interaction={interaction}
          contacts={contacts}
        />
      </Scopebox>
    </>
  );
}
