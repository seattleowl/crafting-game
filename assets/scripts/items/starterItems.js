import { getInventory } from "./slot.js";
import { Item } from "./item.js";

const inventory = getInventory();

[
	new Item("magicBook", inventory).enableRightClick(),
	new Item("grass", inventory),
	new Item("fertilizer", inventory),
	new Item("fertilizer", inventory)
];
