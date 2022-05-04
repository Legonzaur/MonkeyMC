// priority: 0

onEvent("jei.hide.items", (event) => {
  console.log("Hiding items in JEI");
  // event.hide('/\\w+:\\w+_spawn_egg/');
  // event.hide('/minecraft:lingering_potion/');
  // event.hide('/minecraft:splash_potion/');
  event.hide("bigreactors:graphite_ingot");
  event.hide("bigreactors:graphite_dust");
});
