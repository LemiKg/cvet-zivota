import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { trainings } from "../../../components/mocks/trainingsMocks";
import Title from "../../../components/TextCard/Title";
import Content from "../../../components/TextCard/Content";
import LearningInstructions from "../../../components/LearningInstructions";

const TrainingsText = () => {
  const renderMethod = useCallback(() => {
    const router = useRouter();
    const { id } = router.query;
    const page = trainings[id];

    return (
      page && (
        <div className="single-page-text colored-list-items">
          <Title text={page.title} />

          <h1 className="study-areas">Oblasti učenja</h1>

          <Content text={page.text} />
          {page.extraText && <Content text={page.extraText} />}
        </div>
      )
    );
  }, [trainings]);

  return (
    <div>
      {renderMethod()}
      <LearningInstructions />
    </div>
  );
};

export default React.memo(TrainingsText);
