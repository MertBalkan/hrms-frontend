import React, {useState} from "react";
import { Button, Container, Menu, MenuItem, Icon } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";

export default function Navi() {

  const [isAuthenticated, setisAuthenticated] = useState(false);
  const history = useHistory();

  function handleSignOut(){
    setisAuthenticated(false);
    history.push("/mainmenu");
  }

  function handleSignIn(){
    setisAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item icon="mail" name="messages" className="message"/>
          <Menu.Menu position="right">
            {isAuthenticated ? <SignedIn signOut = {handleSignOut}/> : <SignedOut signIn = {handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
