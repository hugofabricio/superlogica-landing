import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import MainLayout from "../../layouts/main";
import Jumbotron from "../../components/Jumbotron";
import Section from "../../components/Section";
import PlansGroup from "../../components/PlansGroup";
import Plan from "../../components/Plan";
import Carousel from "../../components/Carousel";
import Slide from "../../components/Slide";

const Campaign = props => {
  const { campaign } = props;

  if (campaign.colors) {
    theme.colors.primary = campaign.colors.primary;
    theme.colors.primaryLight = campaign.colors.primaryLight;
    theme.colors.primaryDark = campaign.colors.primaryDark;
    theme.colors.secondary = campaign.colors.secondary;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>{`Superlógica - ${campaign.title}`}</title>
          <meta name="description" content={campaign.subtitle} />
        </Head>
        <MainLayout>
          <Jumbotron
            title={campaign.title}
            subtitle={campaign.subtitle}
            button={{
              label: campaign.button.label,
              url: campaign.button.url
            }}
            withConversion={true}
            startColor={theme.colors.primary}
            endColor={theme.colors.secondary}
          />
          <Section title="Planos" paddingBottom={120}>
            <PlansGroup>
              {campaign.plans.map(plan => (
                <Plan
                  key={plan.id}
                  id={plan.id}
                  name={plan.name}
                  price={plan.price}
                  features={plan.features}
                  isBestSeller={plan.isBestSeller}
                  button={{
                    label: "Comprar",
                    url: "/campanhas/[slug]",
                    hasLeftIcon: "cart"
                  }}
                />
              ))}
            </PlansGroup>
          </Section>
          <Section
            title="Destaques"
            isFluid
            endColor="#ffffff"
            paddingBottom={60}
          >
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
      </ThemeProvider>
    </>
  );
};

Campaign.getInitialProps = async function(context) {
  const { slug } = context.query;
  const res = await fetch(`https://api.jsonbin.io/b/${slug}/latest`);
  const campaign = await res.json();

  return { campaign };
};

export default Campaign;
