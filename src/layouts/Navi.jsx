import React from "react";
import { Button, Container, Menu, MenuItem, Icon } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu size="large" inverted color="black" fixed="top">
        <Container>
          <div className="home">
            <Menu.Item name="home">
              <Icon name="home" color="yellow">
                <p className="home">Home</p>
              </Icon>
            </Menu.Item>
          </div>
          <div className="message">
            <Menu.Item name="messages">
              <Icon name="mail">
                <p className="message">Messages</p>
              </Icon>
            </Menu.Item>
          </div>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button color="linkedin">Sign Up</Button>
              <Icon name="plus circle"></Icon>
            </Menu.Item>
            <Menu.Item>
              <Button color="green" icon="sign in">
                Sign In
              </Button>
              <Icon name="sign in"></Icon>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
