import { MenuItem } from "./MenuItem";
import { CiMug1 } from 'react-icons/ci';
import { GiBeerBottle } from "react-icons/gi";
import {PiTShirtLight} from "react-icons/pi"
export function MenuBox() {
    return (
        <aside className="menu-box">
            <div>
                <MenuItem name={"Tazas"} divider={true}><CiMug1 size={"20px"} /></MenuItem>
                <MenuItem name={"Playeras"} divider={true}><PiTShirtLight size={"20px"} /></MenuItem>
                <MenuItem name={"Termos"} divider={true} ><GiBeerBottle size={"20px"} /></MenuItem>
            </div>
        </aside>
    )
}