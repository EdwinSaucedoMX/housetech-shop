"use client"
import { Image } from "@chakra-ui/react"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"

export function Carousel({ title, ...props }) {
    return (
        <figure className="carousel-shop" >
            <menu className="arrows">
                <MdNavigateBefore />
                <MdNavigateNext />
            </menu>
            <h3>{title}</h3>
            <img
                src='https://img.freepik.com/fotos-premium/taza-cafe-blanca-11-onzas-trazado-recorte_686086-14.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
            />
            <menu className="bars">
                <menuitem></menuitem>
                <menuitem></menuitem>
                <menuitem></menuitem>
            </menu>
        </figure>
    )
}