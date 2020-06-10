import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import React from "react";

import "@reach/dialog/styles.css";

import { Colors } from "Assets/Colors";

import {
  Container,
  Props as ContainerProps,
  CloseButton,
  Header,
} from "./style";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  "aria-label": string;
  size?: ContainerProps["size"];
  header?: React.FC;
}

const overlayStyles: React.CSSProperties = {
  backgroundColor: `${Colors.dark}90`,
  zIndex: Number.MAX_SAFE_INTEGER,
};

const dialogContentStyles: React.CSSProperties = {
  backgroundColor: "transparent",
  zIndex: Number.MAX_SAFE_INTEGER,
  padding: 0,
  margin: "7vh auto",
};

const Modal: React.FC<Props> = props => {
  const { isOpen, onClose, size, children, header: HeaderElements } = props;

  return (
    <DialogOverlay style={overlayStyles} isOpen={isOpen} onDismiss={onClose}>
      <DialogContent
        aria-label={props["aria-label"]}
        style={dialogContentStyles}
      >
        <Container size={size}>
          <Header>
            {HeaderElements && <HeaderElements />}
            <CloseButton onClick={onClose} aria-label="Fechar modal">
              <FontAwesomeIcon icon="times" />
            </CloseButton>
          </Header>
          {children}
        </Container>
      </DialogContent>
    </DialogOverlay>
  );
};

export default Modal;
