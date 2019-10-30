import { ThemeProvider } from "styled-components";
import { theme } from "../styles";
import Head from "next/head";
import MainLayout from "../layouts/main";
import Jumbotron from "../components/Jumbotron";
import Section from "../components/Section";
import PlansGroup from "../components/PlansGroup";
import Plan from "../components/Plan";

const IndexPage = props => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Superlógica - Teste Hugo Fabricio</title>
        </Head>
        <MainLayout>
          <Jumbotron
            title="Superlógica"
            subtitle="Teste - Hugo Fabricio"
            startColor={theme.colors.primary}
            endColor={theme.colors.secondary}
            button={{
              label: "Exemplo de resposta API",
              url: "https://api.jsonbin.io/b/5db8ce10ab1d93751bfdf3d5/latest"
            }}
          />
          <Section title="Planos" paddingBottom={120}>
            <PlansGroup>
              <Plan
                name="Campanha 01"
                button={{
                  label: "Visualizar",
                  hasRightIcon: "arrowRight",
                  url: "/campanhas/5db8ce10ab1d93751bfdf3d5"
                }}
              />
              <Plan
                name="Campanha 02"
                button={{
                  label: "Visualizar",
                  hasRightIcon: "arrowRight",
                  url: "/campanhas/5db8d9b2ab1d93751bfdf994"
                }}
              />
              <Plan
                name="Campanha 03"
                button={{
                  label: "Visualizar",
                  hasRightIcon: "arrowRight",
                  url: "/campanhas/5db8d6c0f6b06e74fd753aa9"
                }}
              />
            </PlansGroup>
          </Section>
        </MainLayout>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
