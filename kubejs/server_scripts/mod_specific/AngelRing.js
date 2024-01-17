ServerEvents.recipes((event) =>{
    // const angel = /^angelring:.+_angel_ring$/; | Only for exemple in future scripts
    event.remove({output:'@angelring'})
    //Diamond Ring
    event.custom(
        {
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
              {
                "type": "pneumaticcraft:stacked_item",
                "count": 16,
                "item": "mysticalagriculture:awakened_supremium_essence"
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "count": 16,
                "item": "gtceu:plutonium_ingot"
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "count": 16,
                "item": "pneumaticcraft:plastic"
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "count": 16,
                "item": "bigreactors:insanite_ingot"
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "count": 16,
                "item": "mekanism:pellet_antimatter"
              },
              {
                "type": "pneumaticcraft:stacked_item",
                "count": 16,
                "item": "powah:nitro_crystal_block"
              },
              {
                "item": "megacells:cell_component_256m"
              },
              
            ],
            "pressure": 5.0,
            "results": [
              {
                "item": "angelring:diamond_ring"
              }
            ]
          }
    )
    //energetic angel ring
    event.custom(
        {
            "type": "powah:energizing",
            "ingredients": [
              {"item": "angelring:diamond_ring"},
              {"item": "mekamod:meka_ingot"},
              {"item": "mekanism:alloy_infused"},
              {"item": "mekanism:advanced_control_circuit"},
              {"item": "mekanism:advanced_control_circuit"}
            ],
            "energy": 20000000,
            "result": {
              "item": "angelring:energetic_angel_ring"
            }
          }
    )
    //LeadStone Angel Ring
    event.custom(
        {
            "type": "mysticalagriculture:infusion",
            "conditions": [
              {
                "type": "mysticalagriculture:augment_enabled",
                "augment": "mysticalagriculture:absorption_viii"
              }
            ],
            "input": {
              "item": "angelring:energetic_angel_ring"
            },
            "ingredients": [
              {
                "item": "mysticalagriculture:supremium_ingot"
              },
              {
                "item": "mekanism:jetpack"
              },
              {
                "item": "mysticalagriculture:supremium_ingot"
              },
              {
                "item": "mysticalagriculture:imperium_gemstone_block"
              },
              {
                "item": "mysticalagriculture:supremium_ingot"
              },
              {
                "item": "mysticalagriculture:imperium_gemstone_block"
              },
              {
                "item": "mysticalagriculture:supremium_ingot"
              },
              {
                "item": "mysticalagriculture:imperium_gemstone_block"
              }
            ],
            "result": {
              "item": "angelring:leadstone_angel_ring"
            }
          }
    )
    //Hardened Angel Ring
    event.custom(
      {
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
          {
            "ingredient": {
              "item": "thermal:upgrade_augment_1"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:neutronium_ingot"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:ruthenium_trinium_americium_neutronate_octal_wire"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:neutronium_ingot"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:ruthenium_trinium_americium_neutronate_octal_wire"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:neutronium_ingot"
            }
          },
          {
            "ingredient": {
              "item": "gtceu:ruthenium_trinium_americium_neutronate_octal_wire"
            }
          },
          {
            "ingredient": {
              "item": "allthemodium:unobtainium_gear"
            }
          },
          {
            "ingredient": {
              "item": "powah:energizing_rod_hardened"
            }
          },
          {
            "ingredient": {
              "item": "powah:energizing_rod_hardened"
            }
          },
          {
            "ingredient": {
              "item": "allthemodium:unobtainium_gear"
            }
          },
          {
            "ingredient": {
              "item": "allthemodium:unobtainium_gear"
            }
          },
          {
            "ingredient": {
              "item": "angelring:leadstone_angel_ring"
            }
          },
          {
            "ingredient": {
              "item": "allthemodium:unobtainium_gear"
            }
          }
        ],
        "output": "angelring:hardened_angel_ring"
      }
    )
    //Reinforced Angel Ring
    event.custom(
      {
        "type":"mekanism:nucleosynthesizing",
        "duration":1000,"gasInput":{"amount":500,"gas":"mekanism:antimatter"},
        "itemInput":{"ingredient":{"item":"angelring:hardened_angel_ring"}},
        "output":{"item":"angelring:reinforced_angel_ring"}
      }
    )
    //Resonant Angel Ring
    event.custom(
      {
        "type": "mysticalagriculture:awakening",
        "essences": [
          {
            "item": "mysticalagriculture:turtle_essence",
            "count": 40
          },
          {
            "item": "mysticalagriculture:honey_essence",
            "count": 40
          },
          {
            "item": "mysticalagriculture:coral_essence",
            "count": 40
          },
          {
            "item": "mysticalagriculture:rabbit_essence",
            "count": 40
          }
        ],
        "input": {
          "item": "angelring:reinforced_angel_ring"
        },
        "ingredients": [
          {
            "item": "gtceu:incoloy_ma_956_hot_ingot"
          },
          {
            "item": "gtceu:incoloy_ma_956_hot_ingot"
          },
          {
            "item": "gtceu:incoloy_ma_956_hot_ingot"
          },
          {
            "item": "gtceu:incoloy_ma_956_hot_ingot"
          }
        ],
        "result": {
          "item": "angelring:resonant_angel_ring"
        }
      }
    )
    //Angel Ring
    event.custom(
      {
        "type": "apotheosis:enchanting",
        "conditions": [{
          "type": "apotheosis:module",
          "module": "enchantment"
        }],
        "input": {
          "item": "angelring:resonant_angel_ring"
        },
        "requirements": {
          "eterna": 50,
          "quanta": 100,
          "arcana": 100
        },
        "display_level": 5,
        "result": {
          "item": "angelring:angel_ring",
          "count": 1
        }
      }
    )
})