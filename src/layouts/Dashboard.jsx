import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import { Grid } from "semantic-ui-react";
import SideBar from "./SideBar";
import { Route } from "react-router";
import EmployerList from "../pages/EmployerList";
import CandidateList from "../pages/CandidateList";
import MainMenu from "../pages/MainMenu";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width = {4}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width = {12}>
            <Route exact path="/" component={JobAdvertisementList} />
            <Route path="/jobAdvertisements" component={JobAdvertisementList} />
            <Route path="/candidates" component={CandidateList} />
            <Route path="/employers" component={EmployerList} />
            <Route path="/mainmenu" component={MainMenu} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
