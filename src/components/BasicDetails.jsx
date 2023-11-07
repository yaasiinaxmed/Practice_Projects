import React from "react";
import { useForm } from "@mantine/form";
import useCountries from "../hooks/useCounters";
import { Button, Group, NumberInput, Select, TextInput, Textarea } from "@mantine/core";
import Map from "./Map";

function BasicDetails({ fields, setFields, nextStep, prevStep, setActive,setOpened }) {
  const { getAll } = useCountries();

  const form = useForm({
    initialValues: {
      title: fields?.title,
      propertyType: fields?.propertyType,
      description: fields?.description,
      price: fields?.price,
    },

    validate: {
      title: (value) =>
        value.length < 3 || value === null
          ? "Must have atleast 3 characters"
          : null,
        propertyType: (value) =>
        value.length < 3 || value === null
          ? "Must have atleast 3 characters"
          : null,
      description: (value) =>
        value.length < 3 || value === null
          ? "Must have atleast 3 characters"
          : null,
      price: (value) =>
        value < 50 || value === null
          ? "Must be greater then 50 dollars"
          : null,
    },
  });

  const { title, propertyType,description, price } = form.values;

  const data = [
    "House",
    "Villa",
    "Apperment"
  ]

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if(!hasErrors) {
      setFields(prev => ({...prev, title, propertyType, description, price }));
      setActive(0)
      setOpened(false)
    }

  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex items-center flex-col w-full"
      >
        <div className="w-full flex gap-4 mt-4 items-center">
          {/* inputs */}
          <div className="flex-1 flex flex-col gap-4">
            <TextInput
              w={"100%"}
              withAsterisk
              label="Title"
              placeholder="Property Name"
              {...form.getInputProps("title")}
            />

            <Select
             w={"100%"}
             withAsterisk
             label="Property Type"
             placeholder="Property Type"
             clearable
             searchable
             data={data}
             {...form.getInputProps("propertyType")}
            />

            <Textarea
              w={"100%"}
              withAsterisk
              label="Description"
              placeholder="Description"
              {...form.getInputProps("description")}
            />

            <NumberInput
              w={"100%"}
              withAsterisk
              label="Price"
              placeholder="$339.94"
              min={0}
              {...form.getInputProps("price")}
            />
            
          </div>
        </div>
        <Group position="center" mt={"xl"}>
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>

          <Button type="submit">
            Next Step
          </Button>
        </Group>
      </form>
    </div>
  );
}

export default BasicDetails;
