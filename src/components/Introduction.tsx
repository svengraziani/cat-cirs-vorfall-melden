import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Risk Management in Healthcare</h2>
      <p className="mb-4">
        Risk management in healthcare is more than just prevention – it's a crucial pillar of quality assurance that puts patient safety at the forefront. By identifying and addressing risks early, we contribute to ensuring that medical care consistently meets the highest standards.
      </p>
      <p className="mb-4">
        The Critical Incident Reporting System (CIRS) is an indispensable tool in this process. It helps us recognize risks early, thoroughly analyze incidents, and derive concrete measures to prevent future errors. Whether it's organizational challenges, mix-ups, or medical misjudgments – every reported situation is used to create valuable learning opportunities and continuously improve the safety of our patients.
      </p>
      <p className="mb-4">
        Transparent and comprehensive documentation of all incidents is key to continuous improvement. In our CIRS system, all incidents are systematically recorded, analyzed, and transformed into clear recommendations for action. This ensures that no relevant information is lost and that every employee knows how to minimize future risks.
      </p>
      <p>
        Communication is crucial – not only within teams but also across departments. The insights from our CIRS system are intended to raise awareness of risks and promote a culture of trust and collaboration.
      </p>
    </section>
  );
};

export default Introduction;