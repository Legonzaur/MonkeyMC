// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Hello, World! (You will see this line every time server resources reload)"
);

onEvent("recipes", (event) => {
  //Teleport
  event.remove({ output: "travel_anchors:travel_anchor" });
  event.remove({ output: "travel_anchors:travel_staff" });
  event.shapeless("travel_anchors:travel_staff", ["reliquary:ender_staff"]);
  event.shapeless("reliquary:ender_staff", ["travel_anchors:travel_staff"]);
  event.shaped("travel_anchors:travel_anchor", ["AIA", "ICI", "AIA"], {
    I: "botania:elementium_ingot",
    A: "minecraft:obsidian",
    C: "create:refined_radiance_casing",
  });
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
