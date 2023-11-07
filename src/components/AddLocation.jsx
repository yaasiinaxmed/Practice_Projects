import React from "react";
import { useForm } from "@mantine/form";
import useCountries from "../hooks/useCounters";
import { Button, Group, Select, TextInput } from "@mantine/core";
import Map from "./Map";

function AddLocation({ fields, setFields , nextStep}) {
  const { getAll } = useCountries();

  const form = useForm({
    initialValues: {
      country: fields?.country,
      city: fields?.city,
      address: fields?.address,
    },

    validate: {
      country: (value) =>
        value.length < 3 || value === null
          ? "Must have atleast 3 characters"
          : null,
      city: (value) =>
        value.length < 3 || value === null
          ? "Must have atleast 3 characters"
          : null,
      address: (value) =>
        value.length < 3 || value === null
          ? "Must have atleast 3 characters"
          : null,
    },
  });

  const { country, city, address } = form.values;

  const handleSubmit = () => {
    const {hasErrors} = form.validate();
    if(!hasErrors) {
      setFields(prev => ({...prev, city, address, country}))
      nextStep()
    }
  }

  return (
    <div>
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit()
      }}
      className="flex items-center flex-col w-full">
        <div className="w-full flex flex-col sm:flex-row gap-4 mt-4 items-center">
          {/* inputs */}
          <div className="sm:block flex-1 flex flex-col gap-4">
            <Select
              w={"100%"}
              withAsterisk
              label="Country"
              clearable
              searchable
              data={getAll()}
              {...form.getInputProps("country", { type: "input" })}
            />
            <TextInput
              w={"100%"}
              withAsterisk
              label="City"
              {...form.getInputProps("city", { type: "input" })}
            />

            <TextInput
              w={"100%"}
              withAsterisk
              label="Address"
              {...form.getInputProps("address", { type: "input" })}
            />
          </div>
          {/* right */}
          <div className="">
            <Map country={country} city={city} address={address} />
          </div>
        </div>
        <Group position="center" mt={"xl"}>
          <Button type="submit" >Next Step</Button>
        </Group>
      </form>
    </div>
  );
}

export default AddLocation;
