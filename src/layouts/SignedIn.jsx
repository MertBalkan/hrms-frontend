import React from "react";
import { Image, Dropdown, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.ibb.co/swKK74R/d936831d-fefb-4bc2-a7c4-901a9e28c261-profile-image-300x300.png"
        />
        <Dropdown pointing="top right" text="Mert">
          <Dropdown.Menu>
            <Dropdown.Item text="My informations" icon="info" />
            <Dropdown.Item onClick = {signOut} text="Exit" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
