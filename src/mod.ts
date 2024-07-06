import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe";

class HolsterAnyGun implements IPostDBLoadMod {
    modName = "HolsterAnyGun";

    public postDBLoad(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("WinstonLogger");
        logger.logWithColor(`${this.modName} - Holster any gun enabled`, LogTextColor.CYAN)

        const dataBaseTables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const items = dataBaseTables.templates.items;

        const inventory = items["55d7217a4bdc2d86028b456d"]
        const holster = inventory._props.Slots[2]

        holster._props.filters[0].Filter.push("5422acb9af1c889c16000029");
    }
}

module.exports = { mod: new HolsterAnyGun() }