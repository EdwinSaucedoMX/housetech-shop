"use client";
import { Divider } from "@chakra-ui/react";

export function MenuItem({ name, divider = true, children }) {
    return (
        <section className="menu-item">
            <div className="name">
                {children}
                <h4>{name}</h4>
            </div>
            {divider && <Divider />}
        </section>
    )
}