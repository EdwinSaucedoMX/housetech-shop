
"use client"
import { Stack, Grid, Icon } from "@chakra-ui/react";
import NavLink from "./NavLink";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

export function Nav() {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (

        <Grid as={"nav"} gridTemplateColumns={"repeat(2,1fr)"} direction={"row"}>
            <Stack direction={['column', 'row']} gap={"30px"}>
                <NavLink name={"Inicio"} link={"/"} />
                <NavLink name={"Shop"} link={"https://shop.housetechmx.com"} />
                
            </Stack>
            <Stack direction={['column', 'row-reverse']} >
                {!darkMode && <Icon as={FaSun} className="icon" width={"70px"} height={"100%"} onClick={handleDarkMode}/>}
                {darkMode && <Icon as={FaMoon} className="icon" width={"70px"} height={"100%"} onClick={handleDarkMode} />}
            </Stack>
        </Grid>
    )
}