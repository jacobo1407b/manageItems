import React from 'react';
import { Image, Input, Textarea } from "@nextui-org/react";


const UploadFile = () => {
    return (
        <>
            <Image
                width={320}
                height={180}
                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                alt="Default Image"
                objectFit="cover"
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Titulo"
            />
            <Textarea
                bordered
                color="secondary"
                placeholder="Descripciön"
            />
        </>
    )
}

export default UploadFile