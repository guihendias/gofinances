import React from "react";

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

interface Category {
  name: string;
  icon: string;
}

export interface Transaction {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  transaction: Transaction;
}

const TransactionCard: React.FC<Props> = ({
  transaction: { title, type, amount, category, date }
}) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Amount type={type}>
        {type === "negative" && "- "}
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
