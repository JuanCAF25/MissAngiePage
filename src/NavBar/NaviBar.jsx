import { Navbar, Link, Text, Image } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";
import Logo from "../../public/miss-angie-logo.png";

export function NaviBar() {
  const collapseItems = ["Inicio", "Redes Sociales"];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Image src={Logo} alt="Logo" width="100px" height="150px" />

          <Text b color="inherit" hideIn="xs">
            MISS ANGIE
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link isActive href="/">
            Inicio
          </Navbar.Link>
          <Navbar.Link href="/social-media">Redes Sociales</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        ></Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item === "Inicio" ? "/" : "/social-media"}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
