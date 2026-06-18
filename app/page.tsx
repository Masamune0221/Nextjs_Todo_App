import { Button, Container, Text, Title } from '@mantine/core';

export default function Page() {
  return (
    <Container mt="xl">
      <h1>Todo App</h1>
      <Text mt="md" c="dimmed">
        Mantine が使えるようになったよ
      </Text>
      <Button mt="lg">はじめる</Button>
    </Container>
  );
}
