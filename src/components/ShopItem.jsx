"use client"
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button
} from "@chakra-ui/react";

export function ShopItem({name, description, price}) {
    return (
        <Card className="product-card" maxW='250px' maxH='320px' borderRadius='lg'>
            <CardBody>
                <Image
                    src='https://img.freepik.com/fotos-premium/taza-cafe-blanca-11-onzas-trazado-recorte_686086-14.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading className="name" size='md'>{name || "Living room Sofa"}</Heading>
                    <Text className="description">
                        {description || "This sofa is perfect for modern tropical spaces."}
                    </Text>
                    <Text className="price"  fontSize='2xl'>
                        ${price || 450}
                    </Text>
                </Stack>
            </CardBody>
            {/* <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter> */}
        </Card>
    )
}