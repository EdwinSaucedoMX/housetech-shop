
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
            <Grid gridTemplateColumns={"repeat(auto-fit,minmax(100px, 1fr))"}>
                <NavLink name={"Inicio"} link={"https://housetechmx.com"} />
                <NavLink name={"Shop"} link={"/"} />
            </Grid>
            <Stack direction={['column', 'row-reverse']} margin={"0 -30px"}>
                {!darkMode && <Icon as={FaSun} className="icon" width={"70px"} height={"100%"} onClick={handleDarkMode}/>}
                {darkMode && <Icon as={FaMoon} className="icon" width={"70px"} height={"100%"} onClick={handleDarkMode} />}
            </Stack>
        </Grid>
    )
}