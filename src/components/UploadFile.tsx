import React, { useEffect, useState } from 'react';
import { Image, Input, Textarea } from "@nextui-org/react";
import axios from 'axios';

const UploadFile = () => {

    const [image, setimage] = useState("")


    function click() {
        axios.get("/api/getImage?filename=wsftrgyyr.png").then((r) => {
            setimage(r.data.file)
            console.log(r.data.file.length / (1024 * 1024))
        })
    }
    async function changeFile(e: any) {
        const file = e.target.files[0];
        console.log(file)
    }
    return (
        <>
            <Image
                width={320}
                height={180}
                alt="Default Image"
                src={image}
                objectFit="cover"
            />
            <button onClick={click}>print</button>

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