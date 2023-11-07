import React, { useState } from 'react'
import {Modal, Stepper, Button, Group, Container } from '@mantine/core';
import AddLocation from './AddLocation';
import UploadImage from './UploadImage';
import BasicDetails from './BasicDetails';

function ModalForm({opened, setOpened}) {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const [fields, setFields] = useState({
    title: "",
    description: "",
    propertyType: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null
  })

  return (
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    closeOnClickOutside
    size={"90rem"}
    >
      <Container h={"40rem"} w={"100%"}>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="Location" description="Address">
          <AddLocation
           nextStep={nextStep}
           fields={fields}
           setFields={setFields}
          />
        </Stepper.Step>
        <Stepper.Step label="Image" description="Upload">
          <UploadImage
          nextStep={nextStep}
          prevStep={prevStep}
          fields={fields}
          setFields={setFields}
          />
        </Stepper.Step>
        <Stepper.Step label="Basic" description="Details">
          <BasicDetails
           nextStep={nextStep}
           prevStep={prevStep}
           fields={fields}
           setFields={setFields}
           setActive={setActive}
           setOpened={setOpened}
          />
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        
        </Stepper.Completed>
      </Stepper>
 
      </Container>
    </Modal>
  )
}

export default ModalForm