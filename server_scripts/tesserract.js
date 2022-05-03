onEvent("entity.loot_tables", (event) => {
  // Override zombie loot table that will drop 5 of either carrot (25% chance) or apple (75% chance)
  event.addEntity("minecraft:ender_dragon", (table) => {
    table.addPool((pool) => {
      pool.rolls = 1;
      pool.addItem("kubejs:space_infinity_stone", 1);
      pool.addItem("kubejs:mind_infinity_stone", 1);
      pool.addItem("kubejs:reality_infinity_stone", 1);
      pool.addItem("kubejs:power_infinity_stone", 1);
      pool.addItem("kubejs:time_infinity_stone", 1);
      pool.addItem("kubejs:soul_infinity_stone", 1);
    });
  });
});

onEvent("recipes", (event) => {
  event.remove({ output: "tesseract:tesseract" });
  event.recipes.createMechanicalCrafting(
    "tesseract:tesseract",
    ["M G R", " N B ", " CSV ", " Z A ", "P O T"],
    {
      M: "kubejs:mind_infinity_stone",
      R: "kubejs:reality_infinity_stone",
      S: "kubejs:space_infinity_stone",
      P: "kubejs:power_infinity_stone",
      T: "kubejs:time_infinity_stone",
      O: "kubejs:soul_infinity_stone",
      C: "create:shadow_steel_casing",
      V: "create:refined_radiance_casing",
      B: "cabletiers:ultra_exporter",
      N: "cabletiers:ultra_importer",
      A: "cabletiers:ultra_constructor",
      Z: "cabletiers:ultra_destructor",
      G: "minecraft:slime_ball",
    }
  );

  event.recipes
    .createMixing("create:chromatic_compound", [
      "silentgear:starmetal_dust",
      "forbidden_arcanus:mundabitur_dust",
      "botania:elementium_ingot",
    ])
    .superheated();
});
