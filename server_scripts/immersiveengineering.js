// priority: 0

onEvent("recipes", (event) => {
  function replaceplate(metal, alt) {
    event.replaceOutput(
      { mod: "immersiveengineering", output: "#forge:plates/" + metal },
      "#forge:plates/" + metal,
      `create:${alt}_sheet`
    );
  }
  [
    "aluminum",
    "lead",
    "silver",
    "nickel",
    "uranium",
    "constantan",
    "electrum",
    "steel",
  ].forEach((e) => {
    event.recipes.createPressing(
      "immersiveengineering:plate_" + e,
      "immersiveengineering:ingot_" + e
    );
  });
  [
    "iron",
    "lead",
    "silver",
    "nickel",
    "uranium",
    "constantan",
    "electrum",
    "steel",
    "copper",
    "gold",
    "aluminum",
  ].forEach((e) =>
    event.remove({
      id: `immersiveengineering:crafting/plate_${e}_hammering`,
    })
  );

  event.remove({
    input: "immersiveengineering:hammer",
    output: "#forge:dusts",
  });
  replaceplate("iron", "iron");
  replaceplate("copper", "copper");
  replaceplate("gold", "golden");

  event.replaceOutput(
    { mod: "immersiveengineering", output: "#forge:plates/copper" },
    "#forge:plates/copper",
    "create:copper_sheet"
  );
});
