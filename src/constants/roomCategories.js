import { deluxe_room } from "../assets"
import { executive_suite } from "../assets"
import { presidential_suite } from "../assets"

export const roomsPreview = {
    rooms: [
        {
            id: 1,
            title: "Deluxe Room",
            description: "Sophisticated comfort with premium amenities and city views",
            price: "$350/night",
            size: "45 m²",
            capacity: "2 Adults",
            image: deluxe_room,
            features: ["Free WiFi", "King Bed", "City View", "Mini Bar"],
        },
        {
            id: 2,
            title: "Executive Suite",
            description: "Spacious living with separate lounge area and panoramic views",
            price: "$550/night",
            size: "75 m²",
            capacity: "2 Adults + 1 Child",
            image: executive_suite,
            features: ["Free WiFi", "Living Area", "Panoramic View", "Executive Lounge Access"],
        },
        {
            id: 3,
            title: "Presidential Suite",
            description: "Ultimate luxury with expansive space and premium services",
            price: "$1,200/night",
            size: "120 m²",
            capacity: "4 Adults",
            image: presidential_suite,
            features: ["Butler Service", "Dining Area", "Jacuzzi", "Private Terrace"],
        },
    ]
}