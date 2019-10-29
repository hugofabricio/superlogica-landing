import { NextSeo } from "next-seo";
import MainLayout from "../layouts/main";
import Jumbotron from "../components/Jumbotron";
import Section from "../components/Section";
import PlansGroup from "../components/PlansGroup";
import Plan from "../components/Plan";
import Carousel from "../components/Carousel";
import Slide from "../components/Slide";

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
      <Section title="Planos" paddingBottom={120}>
        <PlansGroup>
          <Plan />
          <Plan />
          <Plan isBestSeller />
        </PlansGroup>
      </Section>
      <Section title="Destaques" isFluid endColor="#ffffff" paddingBottom={60}>
        <Carousel>
          <Slide
            index={1}
            title="Bom teste!"
            bg="https://images.unsplash.com/photo-1498452572341-c087c3ee25fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          />
          <Slide index={2} title="ReactJS" />
          <Slide
            index={3}
            title="NextJS"
            bg="https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80"
          />
        </Carousel>
      </Section>
    </MainLayout>
  </>
);

export default Index;
