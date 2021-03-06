/**
 * @typedef {string[]} RecipeDefShapless Shapless or long recipe definition
 * @typedef {string[][]} RecipeDefSquare Square recipe definition.
 * @typedef {string} ItemID Item ID
 */

/**
 * Size for recipe shape
 * @enum {number}
 */
const Size = {
	SHAPELESS: 1,
	SHAPE_2X2: 2,
	SHAPE_3X3: 3,
	SHAPE_1X2: 12,
	SHAPE_1X3: 13
};

/**
 * @typedef {Object} Recipe
 * @property {Size} size Shape of the recipe.
 * @property {(RecipeDefShapless | RecipeDefSquare)} recipe Recipe can be a shapeless, square, or rect based on size. Charecters from itemMap are used to translate charecters.
 * @property {Object<string, ItemID>} itemMap Object used to map charecters to items.
 * @property {ItemID} result Item to be outputed.
 */

/**
 * @type {Object<string, Recipe>}
 */
const recipes = {
	book: {
		size: Size.SHAPE_2X2,
		recipe: [
			["#", "/"],
			["/", " "]
		],
		itemMap: {
			"#": "leather",
			"/": "paper"
		},
		result: "book"
	},
	fillBottle: {
		size: Size.SHAPELESS,
		recipe: ["glassBottle"],
		result: "waterBottle"
	},
	fertilizer: {
		size: Size.SHAPE_3X3,
		recipe: [
			["=", " ", "="],
			[" ", "=", " "],
			["=", " ", "="]
		],
		itemMap: {
			"=": "paper"
		},
		result: "fertilizer"
	},
	growTree: {
		size: Size.SHAPELESS,
		recipe: ["fertilizer", "flower"],
		result: "tree"
	},
	chopTree: {
		size: Size.SHAPELESS,
		recipe: ["tree"],
		result: "log"
	},
	stick: {
		size: Size.SHAPE_1X2,
		// prettier-ignore
		recipe: [
			"#", 
			"#"
		],
		itemMap: {
			"#": "log"
		},
		result: "stick"
	},
	woodenShovel: {
		size: Size.SHAPE_1X3,
		// prettier-ignore
		recipe: [
			"#",
			"/",
			"/"
		],
		itemMap: {
			"/": "stick",
			"#": "log"
		},
		result: "woodenShovel"
	},
	growWheat: {
		size: Size.SHAPE_1X3,
		// prettier-ignore
		recipe: [
			"O",
			"X",
			"D"
		],
		itemMap: {
			O: "waterBottle",
			X: "fertilizer",
			D: "dirt"
		},
		result: "wheat"
	},
	grass: {
		size: Size.SHAPE_1X2,
		// prettier-ignore
		recipe: [
			"O",
			"#"
		],
		itemMap: {
			O: "waterBottle",
			"#": "dirt"
		},
		result: "grass"
	},
	growFlower: {
		size: Size.SHAPE_1X2,
		// prettier-ignore
		recipe: [
			"X",
			"#"
		],
		itemMap: {
			X: "fertilizer",
			"#": "grass"
		},
		result: "flower"
	},
	woodenPickaxe: {
		size: Size.SHAPE_3X3,
		// prettier-ignore
		recipe: [
			["#", "#", "#"],
			[" ", "/", " "],
			[" ", "/", " "]
		],
		itemMap: {
			"/": "stick",
			"#": "log"
		},
		result: "woodenPickaxe"
	},
	stonePickaxe: {
		size: Size.SHAPE_3X3,
		// prettier-ignore
		recipe: [
			["o", "o", "o"],
			[" ", "/", " "],
			[" ", "/", " "]
		],
		itemMap: {
			"/": "stick",
			o: "rock"
		},
		result: "stonePickaxe"
	},
	woodenShovel: {
		size: Size.SHAPE_1X3,
		// prettier-ignore
		recipe: [
			"#",
			"/",
			"/"
		],
		itemMap: {
			"/": "stick",
			"#": "log"
		},
		result: "woodenShovel"
	},
	stoneShovel: {
		size: Size.SHAPE_1X3,
		// prettier-ignore
		recipe: [
			"o",
			"/",
			"/"
		],
		itemMap: {
			"/": "stick",
			o: "rock"
		},
		result: "stoneShovel"
	},
	stoneBlock: {
		size: Size.SHAPE_2X2,
		// prettier-ignore
		recipe: [
			["o", "o"],
			["o", "o"]
		],
		itemMap: {
			o: "rock"
		},
		result: "stoneBlock"
	},
	ironPickaxe: {
		size: Size.SHAPE_3X3,
		recipe: [
			["I", "I", "I"],
			[" ", "/", " "],
			[" ", "/", " "]
		],
		itemMap: {
			I: "ironBar",
			"/": "stick"
		},
		result: "ironPickaxe"
	},
	ironShovel: {
		size: Size.SHAPE_1X3,
		// prettier-ignore
		recipe: [
			"I",
			"/",
			"/"
		],
		itemMap: {
			"/": "stick",
			I: "ironBar"
		},
		result: "ironShovel"
	},
	furnace: {
		size: Size.SHAPE_3X3,
		recipe: [
			["#", "#", "#"],
			["#", " ", "#"],
			["#", "#", "#"]
		],
		itemMap: {
			"#": "stoneBlock"
		},
		result: "furnace"
	},
	lightFurnace: {
		size: Size.SHAPELESS,
		recipe: ["furnace", "is:fuelSource"],
		result: "litFurnace"
	},
	glass: {
		size: Size.SHAPELESS,
		recipe: ["litFurnace", "sand", "sand"],
		result: "glass"
	},
	glassBottle: {
		size: Size.SHAPE_3X3,
		recipe: [
			[" ", " ", " "],
			["*", " ", "*"],
			[" ", "*", " "]
		],
		itemMap: {
			"*": "glass"
		},
		result: "glassBottle"
	},
	ironBar: {
		size: Size.SHAPELESS,
		recipe: ["litFurnace", "ironOre"],
		result: "ironBar"
	}
};

export default recipes;
