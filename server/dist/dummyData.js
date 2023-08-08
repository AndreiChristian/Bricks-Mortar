"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.items = exports.subcategories = exports.categories = void 0;
exports.categories = [
    {
        categoryID: "cat1",
        name: "Cement & Aggregates",
        description: "High quality cement and aggregates for construction purposes.",
        image: "path_to_image_of_cement"
    },
    {
        categoryID: "cat2",
        name: "Bricks & Blocks",
        description: "Durable bricks and blocks suitable for building walls, foundations and other structures.",
        image: "path_to_image_of_bricks"
    }
];
exports.subcategories = [
    {
        subcategoryID: "subcat1",
        name: "Portland Cement",
        description: "Type I Portland cement for general purposes.",
        categoryID: "cat1",
        image: "path_to_image_of_portland_cement"
    },
    {
        subcategoryID: "subcat2",
        name: "Concrete Mix",
        description: "Pre-mixed concrete for construction purposes.",
        categoryID: "cat1",
        image: "path_to_image_of_concrete_mix"
    },
    {
        subcategoryID: "subcat3",
        name: "Red Bricks",
        description: "Traditional red bricks for construction.",
        categoryID: "cat2",
        image: "path_to_image_of_red_bricks"
    },
    {
        subcategoryID: "subcat4",
        name: "Cinder Blocks",
        description: "Lightweight cinder blocks for construction.",
        categoryID: "cat2",
        image: "path_to_image_of_cinder_blocks"
    }
];
exports.items = [
    {
        itemID: "item1",
        name: "Type I Portland Cement Bag",
        description: "50kg bag of Type I Portland cement.",
        price: 10.50,
        quantityInStock: 150,
        categoryID: "cat1",
        subcategoryID: "subcat1",
        image: "path_to_image_of_cement_bag"
    },
    {
        itemID: "item2",
        name: "Premixed Concrete",
        description: "25kg bag of pre-mixed concrete.",
        price: 8.75,
        quantityInStock: 100,
        categoryID: "cat1",
        subcategoryID: "subcat2",
        image: "path_to_image_of_concrete_bag"
    },
    {
        itemID: "item3",
        name: "Traditional Red Brick",
        description: "Standard size red brick.",
        price: 0.50,
        quantityInStock: 5000,
        categoryID: "cat2",
        subcategoryID: "subcat3",
        image: "path_to_image_of_red_brick"
    },
    {
        itemID: "item4",
        name: "Standard Cinder Block",
        description: "Standard size cinder block.",
        price: 2.00,
        quantityInStock: 2000,
        categoryID: "cat2",
        subcategoryID: "subcat4",
        image: "path_to_image_of_cinder_block"
    }
];
