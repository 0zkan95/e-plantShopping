import React, { useState, useEffect } from 'react';
import '../styles/ProductList.css'
import CartItem from './CartItem';
import snakePlant from '../assets/snake-plant.jpg';
import spiderPlant from '../assets/chlorophytum.jpg';
import peaceLily from '../assets/peace-lilies.jpg';
import bostonFern from '../assets/boston-fern.jpg';
import rubberPlant from '../assets/Rubber-Plant.jpg';
import AloeVera from '../assets/aloe-vera.jpg';
import Lavender from '../assets/Lavender.avif';
import Jasmine from '../assets/Jasmine.avif';
import Rosemary from '../assets/rosemary.jpg';
import Mint from '../assets/mint.jpg';
import LemonBalm from "../assets/Lemon-balm.jpg";
import Hyacinth from "../assets/hyacinth.jpg";
import Oregano from "../assets/oregano.jpg";
import Marigold from "../assets/marigold.jpg";
import Geraniums from "../assets/geraniums.jpg";
import Basil from "../assets/basil.jpg";
import Catnip from "../assets/catnip.jpg";
import Echinacea from "../assets/echinacea.jpg";
import Peppermint from "../assets/peppermint.jpg";
import Chamomile from "../assets/Chamomile.jpg";
import Calendula from "../assets/Calendula.jpg";
import ZZPlant from "../assets/ZZ-Plant.avif";
import Pothos from "../assets/pothos.jpg";
import castIronPlant from "../assets/cast-iron-plant.jpg";
import Succulents from "../assets/succulents.jpg";
import Aglaonema from "../assets/aglaonema.jpg";
import { addItem } from '../store/CartSlice';
import { useDispatch } from 'react-redux';




function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); 
    const [addedToCart, setAddedToCart] = useState({}); 
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: snakePlant,
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: spiderPlant,
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: peaceLily,
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: bostonFern,
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: rubberPlant,
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: AloeVera,
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: Lavender,
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: Jasmine,
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: Rosemary,
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: Mint,
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: LemonBalm,
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: Hyacinth,
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: Oregano,
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image: Marigold,
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: Geraniums,
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: Basil,
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9"
                },
                {
                    name: "Lavender",
                    image: Lavender,
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Catnip",
                    image: Catnip,
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: AloeVera,
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: Echinacea,
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: Peppermint,
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: LemonBalm,
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: Chamomile,
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: Calendula,
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: ZZPlant,
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: Pothos,
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$10"
                },
                {
                    name: "Snake Plant",
                    image: snakePlant,
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: castIronPlant,
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: Succulents,
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: Aglaonema,
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$22"
                }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (plant) => {
       dispatch(addItem(plant));

        setAddedToCart((prev) => ({
            ...prev,
            [plant.name]: (prev[plant.name] || 0) + 1
        }));
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index} className="product-category">
                            <h2 className="category-title">{category.category}</h2>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div key={plantIndex} className="product-item">
                                        <img src={plant.image} alt={plant.name} className="product-image" />
                                        <h3 className="product-title">{plant.name}</h3>
                                        <p className="product-description">{plant.description}</p>
                                        <p className="product-cost">{plant.cost}</p>
                                        <button 
                                            onClick={handleAddToCart} 
                                            className="product-button">
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}


                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
