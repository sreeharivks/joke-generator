import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card } from 'react-native-elements';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const TabOne = () => {
  return (
    <ScreenContainer>
      <Text>Tab 1</Text>
    </ScreenContainer>
  );
};

export const TabTwo = () => {
  return (
    <ScreenContainer>
      <Text>Tab 2</Text>
    </ScreenContainer>
  );
};

export const Jokes = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(
      'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    );
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScreenContainer>
      {isLoading ? (
        <Card>
          <Text>Loading....</Text>
        </Card>
      ) : data.error === true ? (
        <Card>
          <Text style={styles.paragraph}>{data.message}</Text>
        </Card>
      ) : data.type === 'single' ? (
        <Card>
          <Text style={styles.paragraph}>{data.joke}</Text>
          <Button
            color="cornflowerblue"
            title="Generate New Joke"
            onPress={() => fetchData()}
          />
        </Card>
      ) : (
        <Card>
          <Card.Title>{data.setup}</Card.Title>
          <Card.Divider />
          <Text style={styles.paragraph}>{data.delivery}</Text>
          <Button
            color="cornflowerblue"
            title="Generate New Joke"
            onPress={() => fetchData()}
          />
        </Card>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
