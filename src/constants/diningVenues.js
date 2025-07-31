import { Wine, Coffee, Sunrise, Moon } from "lucide-react";
import { grand_terrace, lumiere_cafe, midnight_lounge, pool_bar } from "../assets";

export const iconComponents = {
  wine: Wine,
  coffee: Coffee,
  sunrise: Sunrise,
  moon: Moon
};

export const diningVenues = {
    venues: [
        {
            id: 1,
            name: "The Grand Terrace",
            type: "Fine Dining",
            description: "Michelin-starred culinary excellence with panoramic city views",
            hours: "Dinner: 6PM - 11PM",
            image: grand_terrace,
            features: ["Seasonal Tasting Menu", "Wine Pairings", "Chef's Table"],
            icon: "wine",
        },
        {
            id: 2,
            name: "Lumière Café",
            type: "All-Day Dining",
            description: "Artisanal breakfast and light fare in an elegant setting",
            hours: "Daily: 6AM - 10PM",
            image: lumiere_cafe,
            features: ["Signature Breakfast", "Afternoon Tea", "Fresh Pastries"],
            icon: "coffee",
        },
        {
            id: 3,
            name: "Azure Pool Bar",
            type: "Casual & Cocktails",
            description: "Refreshing beverages and light bites by the infinity pool",
            hours: "Seasonal: 10AM - Sunset",
            image: midnight_lounge,
            features: ["Crafted Cocktails", "Fresh Ceviche", "Chilled Towel Service"],
            icon: "sunrise",
        },
        {
            id: 4,
            name: "The Midnight Lounge",
            type: "Nightcap Destination",
            description: "Sophisticated late-night cocktails and live jazz",
            hours: "Thu-Sat: 9PM - 2AM",
            image: pool_bar,
            features: ["Premium Spirits", "Live Music", "Cigar Selection"],
            icon: "moon",
        },
    ]
}