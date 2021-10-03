import React from "react";

import { categories } from "../../utils/categories";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from "./styles";

export interface Transaction {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  transaction: Transaction;
}

const TransactionCard: React.FC<Props> = ({
  transaction: { name, type, amount, category, date }
}) => {
  const [selectedCategory] = categories.filter((item) => item.key === category);

  return (
    <Container>
      <Title>{name}</Title>

      <Amount type={type}>
        {type === "negative" && "- "}
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={selectedCategory.icon} />
          <CategoryName>{selectedCategory.name}</CategoryName>
        </Category>

        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
