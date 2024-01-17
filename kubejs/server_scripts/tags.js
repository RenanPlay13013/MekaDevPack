ServerEvents.tags('item', event =>{
    event.removeAllTagsFrom('ae2:dark_monitor');
    event.removeAllTagsFrom('ae2:monitor');
    event.remove('forge:ingots/plutonium', 'bigreactors:blutonium_ingot')
    event.remove('forge:dusts/plutonium', 'bigreactors:blutonium_dust')
})