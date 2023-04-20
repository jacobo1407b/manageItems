import React, { FunctionComponent, useState } from 'react'
import BtnSlider from './BtnSlider';
import axios from "axios"

interface iTem {
    attachments: Array<Attachment>
}

const Slider: FunctionComponent<iTem> = ({ attachments }) => {
    const [slideIndex, setSlideIndex] = useState<any>(1)

    const nextSlide = () => {
        if (slideIndex !== attachments.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === attachments.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(attachments.length)
        }
    }

    const moveDot = (index: number) => {
        setSlideIndex(index)
    }

    const getUrl = (dm: string) => {
        return "we"
    }
    return (
        <div className="container-slider">
            {attachments.map((obj, index) => {
                return (
                    <div
                        key={obj.DmDocumentId}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <h1>{getUrl(obj.DocumentURL)}</h1>
                        <img
                            src={obj.DocumentURL}
                            alt={obj.FileName}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider