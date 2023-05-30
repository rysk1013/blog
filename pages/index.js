import { Meta } from 'components/Meta';
import Head from 'next/head'
import Image from 'next/image'
import { Container } from 'components/Container';
import { Hero } from 'components/Hero';
import { Layout } from 'components/Layout';

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      />
    </Container>
  );
}
