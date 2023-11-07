import { Button, Group } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

function UploadImage({ fields, setFields, nextStep, prevStep }) {
  const [imageURL, setImageURL] = useState(fields?.image);
  console.log(imageURL)

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const handleNext = () => {
    setFields(prev => ({...prev, image: imageURL}))
    nextStep()
  }

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
            cloudName: "dcbeluo20",
            uploadPreset: "mfdrpo5g",
            maxFiles: 1
        },
        (err, result) => {
            if(result.event === "success") {
                setImageURL(result.info.secure_url)
            }
        }
    )
  }, [])

  return (
    <div className="w-full h-full flex itmes-center justify-center flex-col mt-4 gap-6">
      {!imageURL ? (
        <div className="w-full h-[25rem] border-2 border-dashed border-blue-500 flex flex-col items-center justify-center cursor-pointer"
         onClick={() => widgetRef.current?.open()}>
          <AiOutlineCloudUpload size={50} className="text-blue-500" />
          <span>Upload Image</span>
        </div>
      ) : (
        <div className="w-full h-[31rem] rounded-lg overflow-hidden cursor-pointer"
        onClick={() => widgetRef.current?.open()}>
          <img src={imageURL} alt="" className="w-full h-full bg-center bg-cover bg-no-repeat object-cover" />
        </div>
      )}
      <Group className="flex items-center !justify-center  ">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button type="submit" onClick={handleNext} disabled={!imageURL}>Next Step</Button>
      </Group>
    </div>
  );
}

export default UploadImage;
