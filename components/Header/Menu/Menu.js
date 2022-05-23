import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {
    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPlatforms />
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={6}>
                        <h2>Menu Usuario</h2>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}


function MenuPlatforms() {
    return (
        <Menu>
            <Link href={'/playstation'}>
                <Menu.Item as="a" > Playstation </Menu.Item>
            </Link>

            <Link href={'/xbox'}>
                <Menu.Item as="a" > Xbox </Menu.Item>
            </Link>

            <Link href={'/switch'}>
                <Menu.Item as="a" > Switch </Menu.Item>
            </Link>
        </Menu >
    )
}