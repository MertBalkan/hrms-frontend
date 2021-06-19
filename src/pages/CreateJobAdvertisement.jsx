import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import JobPositionService from "../services/jobPositionService"
import CityService from "../services/cityService";
import { string } from "yup/lib/locale";
import { result } from "lodash";
import { useHistory } from "react-router-dom";

export default function CreateJobAdvertisement() {

  let errorMessage = "This field is required"

  let jobAdvertisementService = new JobAdvertisementService();

  const JobAdvertisementServiceAddSchema = Yup.object().shape({
    lastDate: Yup.date().nullable().required(errorMessage),
    description: Yup.string().required(errorMessage),
    jobPositionId: Yup.string().required(errorMessage),
    workTimeId: Yup.string().required(errorMessage),
    workPlaceId: Yup.string().required(errorMessage),
    openPositions: Yup.string().required(errorMessage).min(1, "Position count cant less than 1"),
    cityId: Yup.string().required(errorMessage),
    minSalary: Yup.number().min(0, "Cant less than 0").required(errorMessage),
    maxSalary: Yup.number().min(0, "Cant less than 0").required(errorMessage),
  })

  function handleSubmit(job) {
    console.log("hello");
    jobAdvertisementService.add(job);
  }

  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      description: "",
      jobPositionId: "",
      workTimeId: "",
      workPlaceId: "",
      openPositions: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      lastDate: "",
    },
    validationSchema: JobAdvertisementServiceAddSchema,
    onsubmit: (values) => {
      console.log(formik.values);
      values.employerId = 1
      jobAdvertisementService.add(values).then((result) => console.log(result.data.data))
      history.push("/jobAdvertisements")
    },
  });

  const [workTimes, setWorkTimes] = useState([])
  const [workTypes, setWorkTypes] = useState([])
  const [cities, setCities] = useState([])
  const [jobPositions, setJobPositions] = useState([])

  useEffect(() => {
    let workTimeService = new WorkTimeService();
    let workTypeService = new WorkTypeService();
    let jobPositionService = new JobPositionService();
    let cityService = new CityService();

    workTimeService.getWorkTimes().then((result) => setWorkTimes(result.data.data));
    workTypeService.getWorkTypes().then((result) => setWorkTypes(result.data.data));
    jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
  }, [])

  const workTimeOption = workTimes.map((workTime, index) => ({
    key: index,
    text: workTime.workTimeName,
    value: workTime.id,
  }));

  const workTypeOption = workTypes.map((workType, index) => ({
    key: index,
    text: workType.workTypeName,
    value: workType.id,
  }));

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.positionName,
    value: jobPosition.positionId,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  return (
    <div>
      <Card fluid>
        <Card.Content header='Add Job Advertisement' />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <Dropdown
                clearable
                item
                placeholder="Job Advertisement"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobPositionId")
                }
                onBlur={formik.onBlur}
                id="jobPositionId"
                value={formik.values.jobPositionId}
                options={jobPositionOption}
              />
              {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.jobPositionId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="City"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.cityId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Work Type"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workTypeId")
                }
                onBlur={formik.onBlur}
                id="workTypeId"
                value={formik.values.workTypeId}
                options={workTypeOption}
              />
              {formik.errors.workTypeId && formik.touched.workTypeId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workTypeId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Work Time"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workTimeId")
                }
                onBlur={formik.onBlur}
                id="workTimeId"
                value={formik.values.workTimeId}
                options={workTimeOption}
              />
              {formik.errors.workTimeId && formik.touched.workTimeId && (
                <div className={"ui pointing red basic label"}>{formik.errors.workTimeId}</div>
              )}
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Salary - Minimum"
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                  </Input>
                  {formik.errors.minSalary && formik.touched.minSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.minSalary}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Salary - Maximum"
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                  </Input>
                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.maxSalary}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    id="openPositions"
                    name="openPositions"
                    error={Boolean(formik.errors.openPositions)}
                    onChange={formik.handleChange}
                    value={formik.values.openPositions}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Open Position Count"
                  />
                  {formik.errors.openPositions && formik.touched.openPositions && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.openPositions}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                    error={Boolean(formik.errors.lastDate)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "lastDate")
                    }
                    value={formik.values.lastDate}
                    onBlur={formik.handleBlur}
                    name="lastDate"
                    placeholder="Last Date"
                  />
                  {formik.errors.lastDate && formik.touched.lastDate && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.lastDate}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <TextArea
                placeholder="Description"
                style={{ minHeight: 100 }}
                error={Boolean(formik.errors.description).toString()}
                value={formik.values.description}
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
              )}
            </Form.Field>
            <Button
              content="Add"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Card.Content>
      </Card>
    </div >
  )
}
