import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import CreateJobAdvertisement from "../pages/CreateJobAdvertisement"
import { Grid } from "semantic-ui-react";
import SideBar from "./SideBar";
import { Route } from "react-router";
import EmployerList from "../pages/EmployerList";
import CandidateList from "../pages/CandidateList";
import MainMenu from "../pages/MainMenu";
import ResumeList from "../pages/ResumesList";
import ResumeDetail from "../pages/ResumeDetail";

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
            <Route exact path="/jobAdvertisements" component={JobAdvertisementList} />
            <Route exact path="/createNewJobAdvertisement" component={CreateJobAdvertisement} />
            <Route exact path={"/resumes/:id"} component={ResumeDetail}/>
            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/resumes" component={ResumeList} />
            <Route exact path="/mainmenu" component={MainMenu} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
