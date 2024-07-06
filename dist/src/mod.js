"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
class HolsterAnyGun {
    constructor() {
        this.modName = "HolsterAnyGun";
    }
    postDBLoad(container) {
        const logger = container.resolve("WinstonLogger");
        logger.logWithColor(`${this.modName} - Holster any gun enabled`, LogTextColor_1.LogTextColor.CYAN);
        const DB = container.resolve("DatabaseServer").getTables();
        const items = DB.templates.items;
        const inventory = items["55d7217a4bdc2d86028b456d"];
        const holster = inventory._props.Slots[2];
        holster._props.filters[0].Filter.push("5422acb9af1c889c16000029");
    }
}
module.exports = { mod: new HolsterAnyGun() };
