import { Meta } from 'components/Meta';
import { Container } from 'components/Container';
import { Hero } from 'components/Hero';

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="ブログの記事一覧" />
      <Hero
        title="Blog"
        subtitle="Recnt Posts"
      />
    </Container>
  );
}
