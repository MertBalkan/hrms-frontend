import React from "react";
import { Segment, Image } from "semantic-ui-react";

const src1 = "https://www.supraits.com/wp-content/uploads/2019/02/hrms-1.jpg";

export default function MainMenu() {
  return (
    <div>
      <Segment>
        <Image src={src1} size="medium" centered />
        <strong>
            Welcome to HRMS system
        </strong>
        <p>
            Work In Progressdsadsfd
        </p>
        <p>
            See You!
        </p>
      </Segment>
    </div>
  );
}
