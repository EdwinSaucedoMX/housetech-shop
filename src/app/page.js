import { MenuBox } from "@/components/MenuBox";
import { Header } from "@/components/Header";
import { ShopContainer } from "@/components/ShopContainer";
import { Carousel } from "@/components/Carousel";

export default function Shop() {
	const title = "Productos";
	const text =
		"En nuestra tienda online encontrarás una amplia variedad de productos con diseños exclusivos y originales.";
	return (
		<main className={"main shop"}>
			<MenuBox />
			<section className={"content "}>
				<Header
					title={title}
					text={text}
				/>
				<Carousel />
				<ShopContainer />
			</section>
		</main>
	);
}
{
	/* 
<div class="container">
    <div class="menu"></div>
    <div class="content">
        <div class="header"></div>
        <div class="carousel"></div>
        <div class="body"></div>
    </div>
</div> */
}
