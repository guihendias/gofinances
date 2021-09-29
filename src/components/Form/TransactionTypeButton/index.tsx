import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

const icons = { up: "arrow-up-circle", down: "arrow-down-circle" };

interface Props extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  selected: boolean;
}

const TransactionTypeButton: React.FC<Props> = ({
  title,
  type,
  selected,
  ...rest
}) => {
  return (
    <Container {...rest} selected={selected} type={type}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
};

export default TransactionTypeButton;
