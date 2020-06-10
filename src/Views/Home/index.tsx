import React, { useState, useEffect } from "react";

import Panel from "Components/Panel";
import TaskModal from "Components/TaskModal";

import { Panel as IPanel } from "Interfaces/Panel";

import { Container } from "./style";

import { panel as TempPanel } from "Temp/initialData";

const Home: React.FC = () => {
  const [panel, setPanel] = useState<IPanel>();

  useEffect(() => setPanel(TempPanel), []);

  return (
    <Container>
      <TaskModal />
      {panel && <Panel id={panel.id} />}
    </Container>
  );
};

export default Home;
