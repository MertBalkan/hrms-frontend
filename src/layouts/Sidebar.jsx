import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisementList";

export default function SideBar() {
  return (
    <div>
      <Sidebar
        as={Menu}
        animation="scale down"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <Menu.Item as={NavLink} to="mainmenu">
          <img src = "https://techyhood.com/wp-content/uploads/2012/11/HRMS.png"></img>
        </Menu.Item>
        <Menu.Item as={NavLink} to="candidates">
          <Icon name="user" />
          Candidates
        </Menu.Item>
        <Menu.Item as={NavLink} to="employers">
          <Icon name="users" />
          Employers
        </Menu.Item>
        <Menu.Item as={NavLink} to="/jobAdvertisements">
          <Icon name="handshake" />
          Job Advertisements
        </Menu.Item>
      </Sidebar>
    </div>
  );
}
