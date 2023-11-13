import React, { useState } from "react";
import {
  Button,
  NativeSelect,
  NumberInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import useCountries from "../hooks/useCounters";

function Add({ opened, setOpened }) {
  const { getAll } = useCountries();
  const data = ["House", "Villa", "Apartment"];

  const [step, setStep] = useState(1);
  const form = useForm({
    initialValues: {
      country: "",
      city: "",
      address: "",
      title: "",
      type: "",
      description: "",
      price: 0,
      propertyType: "",
      bedrooms: 0,
      bathrooms: 0,
    },
    validate: (values) => {
      const errors = {};

      if (step === 1) {
        if (values.country.length < 3) {
          errors.country = "Must have at least 3 characters";
        }
        if (values.city.length < 3) {
          errors.city = "Must have at least 3 characters";
        }
        if (values.address.length < 3) {
          errors.address = "Must have at least 3 characters";
        }
      }

      if (step === 2) {
        if (values.title.length < 3) {
          errors.title = "Must have at least 3 characters";
        }
        if (values.propertyType.length < 3) {
          errors.propertyType = "Must have at least 3 characters";
        }
        if (values.type.length < 3) {
          errors.type = "Must have at least 3 characters";
        }
        if (values.description.length < 3) {
          errors.description = "Must have at least 3 characters";
        }
        if (values.price < 50) {
          errors.price = "Must be greater than $50";
        }
        if (values.bathrooms < 1) {
          errors.bathrooms = "Must be greater than or equal to 1";
        }
        if (values.bedrooms < 1) {
          errors.bedrooms = "Must be greater than or equal to 1";
        }
      }

      return errors;
    },
  });

  const handleNextStep = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      if(step !== 2) {
        setStep((current) => current + 1);
      }
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
     const {hasErrors} = form.validate()
     if(!hasErrors) {
      console.log(form.values)
     }
  };

  return (
    <div className="bg-white w-full md:w-1/2 shadow p-6 md:p-8 flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Add Property</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step === 2) {
            handleSubmit();
          }
        }}
        className="w-full flex flex-col gap-3"
      >
        {step === 1 && (
          <>
            <Select
              label="Country"
              withAsterisk
              placeholder="Select your country"
              searchable
              clearable
              data={getAll()}
              {...form.getInputProps("country")}
            />
            <TextInput
              label="City"
              withAsterisk
              placeholder="Type your city"
              {...form.getInputProps("city")}
            />
            <TextInput
              label="Address"
              withAsterisk
              placeholder="Type your address"
              {...form.getInputProps("address")}
            />
          </>
        )}
        {step === 2 && (
          <>
            <TextInput
              label="Title"
              withAsterisk
              placeholder="Type your title"
              {...form.getInputProps("title")}
            />
            <Textarea
              withAsterisk
              label="Description"
              placeholder="Description"
              {...form.getInputProps("description")}
            />
            <Select
              withAsterisk
              label="Property Type"
              placeholder="Property Type"
              clearable
              searchable
              data={data}
              {...form.getInputProps("propertyType")}
            />
            <NativeSelect
              withAsterisk
              label="Type"
              placeholder="Select Type"
              data={["For Rent", "For Sell"]}
              {...form.getInputProps("type")}
            />
            <div className="w-full flex gap-2">
              <NumberInput
                label="Bedrooms"
                withAsterisk
                placeholder="1 bedroom"
                {...form.getInputProps("bedrooms")}
              />
              <NumberInput
                label="Bathrooms"
                withAsterisk
                placeholder="1 bathroom"
                {...form.getInputProps("bathrooms")}
              />
              <NumberInput
                withAsterisk
                label="Price"
                placeholder="$339.94"
                min={0}
                {...form.getInputProps("price")}
              />
            </div>
          </>
        )}

        <div className="flex justify-between">
          {step > 1 && (
            <Button
              type="button"
              color="#339AF0"
              className="px-8 py-6"
              onClick={handlePreviousStep}
            >
              Previous
            </Button>
          )}
          {step === 2 ? (
            <Button type="submit" color="#339AF0" className="px-8 py-6">
              Submit
            </Button>
          ) : (
            <Button
              type="button"
              color="#339AF0"
              className="px-8 py-6"
              onClick={handleNextStep}
            >
              Next Step
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Add;
