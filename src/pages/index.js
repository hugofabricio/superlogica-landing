import { NextSeo } from "next-seo";
import MainLayout from "../layouts/main";
import Jumbotron from "../components/Jumbotron";

const Index = () => (
  <>
    <NextSeo
      title="Superlógica"
      description="Uma nova forma de fazer negócios."
    />
    <MainLayout>
      <Jumbotron
        title="Uma nova forma de fazer negócios."
        subtitle="A Superlógica oferece um sistema completo para sua empresa escalar na
        era digital."
        button={{ label: "Saiba mais", url: "/" }}
        withConversion={true}
      />
    </MainLayout>
  </>
);

export default Index;
