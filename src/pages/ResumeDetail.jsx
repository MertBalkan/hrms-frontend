import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ResumeService from '../services/resumeService';
import { Card, Image, Table, Header, Button, Icon } from "semantic-ui-react";

export default function ResumeDetail() {

    let { id } = useParams();
    const [resume, setResumes] = useState({})

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getResumeByCandidateId(id).then((result) => setResumes(result.data.data));
    }, [id])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            {resume.candidate?.firstName + " " + resume.candidate?.lastName}
                        </Card.Header>
                        <Card.Description>
                            <Table celled color={"blue"}>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>User</Table.HeaderCell>
                                        <Table.HeaderCell>Informations</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>First Name</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.candidate?.firstName}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Last Name</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.candidate?.lastName}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Birth Date</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.candidate?.birthDate}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Email</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.candidate?.email}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>
                                                    <a
                                                        href={resume.githubAddress}
                                                        target={"_blank"}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button secondary>
                                                            <Icon name="github" /> Github
                                                        </Button>
                                                    </a>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.githubAddress}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>
                                                    <a
                                                        href={resume.linkedinAddress}
                                                        target={"_blank"}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button color="linkedin">
                                                            <Icon name="linkedin" /> LinkedIn
                                                        </Button>
                                                    </a>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.linkedinAddress}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                </Card>
            </Card.Group>

            <Card fluid>
                <Card.Content header="Universities" />
                <Table celled color={"blue"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>University Name</Table.HeaderCell>
                            <Table.HeaderCell>Departmant</Table.HeaderCell>
                            <Table.HeaderCell>Start Date</Table.HeaderCell>
                            <Table.HeaderCell>Graduate Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {resume.educations?.map((education) => (
                            <Table.Row key={education.id}>
                                <Table.Cell>{education.universityName}</Table.Cell>
                                <Table.Cell>{education.universityDepartment}</Table.Cell>
                                <Table.Cell>{education.startDate}</Table.Cell>
                                <Table.Cell>{education.finishDate}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>

            <Card fluid>
                <Card.Content header="Foreign Languages" />
                <Table celled color={"blue"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Language Name</Table.HeaderCell>
                            <Table.HeaderCell>Language Level min:1 max:5</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {resume.foreignLanguages?.map((language) => (
                            <Table.Row key={language.id}>
                                <Table.Cell>{language.languageName}</Table.Cell>
                                <Table.Cell>{language.languageLevel}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>

            <Card fluid>
                <Card.Content header="Software Technologies" />
                <Table celled color={"blue"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Technology Name</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {resume.technologies?.map((technology) => (
                            <Table.Row key={technology.id}>
                                <Table.Cell>{technology.programmingLanguage}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>
        </div>
    )
}
