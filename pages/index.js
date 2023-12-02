import UpcomingWidget from "@/components/DashboardWidgets/UpcomingWidget/UpcomingWidget";
import WelcomeMessageWidget from "@/components/DashboardWidgets/WelcomeMessageWidget/WelcomeMessageWidget";
import Heading from "@/components/Heading/Heading";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import { getSortedActiveFutureInteractions } from "@/utils/getInteractionDetails";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default function Dashboard({ interactions, contacts, activityLog }) {
  const futureInteractionsToBeDisplayed = getSortedActiveFutureInteractions(
    interactions,
    3
  );

  return (
    <>
      <DefaultHead pageTitle="Dashboard" />
      <Heading level={1}>Dashboard</Heading>
      <FlexContainer>
        <section>
          <WelcomeMessageWidget />
        </section>
        {futureInteractionsToBeDisplayed.length > 0 ? (
          <section>
            <UpcomingWidget
              interactions={futureInteractionsToBeDisplayed}
              contacts={contacts}
            />
          </section>
        ) : null}
        {activityLog.length > 0 ? (
          <section>{/* Display Widget*/}</section>
        ) : null}
      </FlexContainer>
    </>
  );
}
