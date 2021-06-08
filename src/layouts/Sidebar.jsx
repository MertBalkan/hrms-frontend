import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="user" />
          Candidates
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="users" />
          Employers
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="handshake" />
          Job Advertisements
        </Menu.Item>
      </Sidebar>
    </div>
  );
}
