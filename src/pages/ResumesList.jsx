import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import ResumeService from "../services/resumeService";

export default function ResumeList() {
    const [resumes, setResumes] = useState([]);

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService
            .getResumes()
            .then((result) => setResumes(result.data.data));
    });

    return (
        <div>
            <Icon size="huge" name="user circle" />
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Candidate Name</Table.HeaderCell>
                        <Table.HeaderCell>Technologies</Table.HeaderCell>
                        <Table.HeaderCell>Github</Table.HeaderCell>
                        <Table.HeaderCell>Linkedin</Table.HeaderCell>
                        <Table.HeaderCell>See the details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {resumes.map((resume) => (
                        <Table.Row key={resume.id}>

                            <Table.Cell>
                                {resume.candidate.firstName}
                            </Table.Cell>

                            <Table.Cell>
                                {resume.technologies.programmingLanguage}
                            </Table.Cell>

                            <Table.Cell>
                                <a href={resume.githubAddress} target={"_blank"}>
                                    <Button color="black">
                                        <Icon name="github" /> Github
                                    </Button>
                                </a>
                            </Table.Cell>

                            <Table.Cell>
                                <a href={resume.linkedinAddress} target={"_blank"}>
                                    <Button color="linkedin">
                                        <Icon name="linkedin" /> Linkedin
                                    </Button>
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <Button color="facebook" animated as={Link} to={`/resumes/${resume.candidate.id}`}>
                                    <Button.Content visible>See The Details</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name="arrow right"/>
                                    </Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="5">
                            <Menu floated="right" pagination>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                <Menu.Item as="a">1</Menu.Item>
                                <Menu.Item as="a">2</Menu.Item>
                                <Menu.Item as="a">3</Menu.Item>
                                <Menu.Item as="a">4</Menu.Item>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );
}
