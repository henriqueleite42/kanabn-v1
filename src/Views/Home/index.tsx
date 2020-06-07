import React, { useState, useEffect } from "react";

import Panel from "Components/Panel";

import { Panel as IPanel } from "Interfaces/Panel";

import { Container } from "./style";

import { panel as TempPanel } from "Temp/initialData";

const Home: React.FC = () => {
  const [panel, setPanel] = useState<IPanel>();

  useEffect(() => setPanel(TempPanel), []);

  return <Container>{panel && <Panel id={panel.id} />}</Container>;
};

export default Home;
