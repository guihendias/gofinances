import React from "react";
import HighlightCard from "../../components/HighlightCard";
import TransactionCard, { Transaction } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  TransactionsList,
  Transactions,
  Title,
  LogoutButton
} from "./styles";

export interface DataListProps extends Transaction {
  id: string;
}

const Dashboard: React.FC = () => {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "12/12/2021",
      category: { name: "Vendas", icon: "dollar-sign" }
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria",
      amount: "R$ 12.000,00",
      date: "12/12/2021",
      category: { name: "Alimentação", icon: "coffee" }
    },
    {
      id: "3",
      type: "positive",
      title: "Aluguel casa",
      amount: "R$ 12.000,00",
      date: "12/12/2021",
      category: { name: "Vendas", icon: "home" }
    }
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://i.pinimg.com/474x/9b/dc/2f/9bdc2fe7830cfba6e870f2a8f5e16383.jpg"
              }}
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Guilherme</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 12000,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 12000,00"
          lastTransaction="Última saída dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 12000,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionCard key={item.title} transaction={item} />
          )}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
