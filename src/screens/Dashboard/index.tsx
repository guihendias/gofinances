import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [data, setData] = useState<DataListProps[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      const dataKey = "@gofinances:transactions";
      const response = await AsyncStorage.getItem(dataKey);
      const transactions = response ? JSON.parse(response) : [];

      const formattedTransactions = transactions.map((item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        });
        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit"
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date
        };
      }) as DataListProps[];

      setData(formattedTransactions);
    }

    loadTransactions();
  }, []);

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
